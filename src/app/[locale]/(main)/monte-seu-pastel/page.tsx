"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Minus, Plus, ShoppingCart, Trash2, Loader2 } from "lucide-react";
import { toast, Toaster } from "sonner";
import { useTranslations } from "next-intl";

// Tipos para os recheios e pastéis
type Ingredient = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  isVegan: boolean;
  isOrganic: boolean;
  isActive: boolean;
  selecionado?: boolean;
};

type Pastel = {
  id: string;
  ingredientIds: string[];
  quantidade: number;
  preco: number;
};

export default function MonteSeuPastel() {
  const t = useTranslations("builder");
  const { data: session } = useSession();
  const router = useRouter();

  // Estado para os recheios disponíveis
  const [ingredientes, setIngredientes] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);

  // Estado para a quantidade de pastéis
  const [quantidade, setQuantidade] = useState(1);

  // Estado para os pastéis no carrinho
  const [pasteis, setPasteis] = useState<Pastel[]>([]);

  // Estado para o total do pedido
  const [total, setTotal] = useState(0);

  // Estado para finalização de pedido
  const [finalizando, setFinalizando] = useState(false);

  // Carregar ingredientes do banco
  useEffect(() => {
    async function fetchIngredientes() {
      try {
        const response = await fetch("/api/ingredients");
        if (!response.ok) throw new Error("Failed to fetch ingredients");

        const data = await response.json();
        setIngredientes(
          data.map((ing: Ingredient) => ({ ...ing, selecionado: false })),
        );
      } catch (error) {
        console.error("Error loading ingredients:", error);
        toast.error(t("toasts.loadError"));
      } finally {
        setLoading(false);
      }
    }

    fetchIngredientes();
  }, []);

  // Função para selecionar/deselecionar um recheio
  const toggleRecheio = (id: string) => {
    const recheiosSelecionados = ingredientes.filter(
      (r) => r.selecionado,
    ).length;
    const recheio = ingredientes.find((r) => r.id === id);

    if (recheio && !recheio.selecionado && recheiosSelecionados >= 5) {
      toast.error(t("toasts.maxIngredients"));
      return;
    }

    setIngredientes(
      ingredientes.map((r) =>
        r.id === id ? { ...r, selecionado: !r.selecionado } : r,
      ),
    );
  };

  // Função para aumentar a quantidade
  const aumentarQuantidade = () => {
    if (quantidade < 10) {
      setQuantidade(quantidade + 1);
    } else {
      toast.error(t("toasts.maxQuantity"));
    }
  };

  // Função para diminuir a quantidade
  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  // Função para adicionar ao carrinho
  const adicionarAoCarrinho = () => {
    const recheiosSelecionados = ingredientes.filter((r) => r.selecionado);

    if (recheiosSelecionados.length === 0) {
      toast.error(t("toasts.minIngredients"));
      return;
    }

    const novoPastel: Pastel = {
      id: `pastel-${Date.now()}`,
      ingredientIds: recheiosSelecionados.map((r) => r.id),
      quantidade: quantidade,
      preco: calcularPreco(recheiosSelecionados.length, quantidade),
    };

    setPasteis([...pasteis, novoPastel]);

    // Resetar seleções
    setIngredientes(ingredientes.map((r) => ({ ...r, selecionado: false })));
    setQuantidade(1);

    toast.success(t("toasts.addedToCart"), {
      description: t("toasts.addedDescription", {
        quantity: quantidade,
        ingredients: recheiosSelecionados.map((r) => r.name).join(", "),
      }),
    });
  };

  // Função para remover do carrinho
  const removerDoCarrinho = (id: string) => {
    setPasteis(pasteis.filter((p) => p.id !== id));
    toast.success(t("toasts.removed"));
  };

  // Função para calcular o preço
  const calcularPreco = (numRecheios: number, qtd: number) => {
    const precoBase = 14.99;
    const recheiosInclusos = 3;
    const precoRecheioExtra = 1.99;

    let preco = precoBase;
    if (numRecheios > recheiosInclusos) {
      preco += (numRecheios - recheiosInclusos) * precoRecheioExtra;
    }

    return preco * qtd;
  };

  // Atualizar o total quando o carrinho mudar
  useEffect(() => {
    const novoTotal = pasteis.reduce((acc, pastel) => acc + pastel.preco, 0);
    setTotal(novoTotal);
  }, [pasteis]);

  // Função para obter o nome do recheio pelo ID
  const getNomeRecheio = (id: string) => {
    const recheio = ingredientes.find((r) => r.id === id);
    return recheio ? recheio.name : "";
  };

  // Função para formatar preço
  const formatarPreco = (preco: number) => {
    return `R$ ${preco.toFixed(2).replace(".", ",")}`;
  };

  // Função para finalizar pedido
  const finalizarPedido = async () => {
    if (pasteis.length === 0) return;

    setFinalizando(true);

    try {
      // Preparar dados do pedido
      const orderData = {
        items: pasteis.map((pastel) => ({
          type: "CUSTOM" as const,
          ingredientIds: pastel.ingredientIds,
          quantity: pastel.quantidade,
        })),
        customerName: session?.user?.name || "",
        customerEmail: session?.user?.email || "",
      };

      // Se não estiver logado, pedir informações
      if (!session) {
        const nome = prompt(t("promptName"));
        const email = prompt(t("promptEmail"));

        if (!nome || !email) {
          toast.error(t("toasts.nameRequired"));
          setFinalizando(false);
          return;
        }

        orderData.customerName = nome;
        orderData.customerEmail = email;
      }

      // Criar pedido
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      await response.json();

      toast.success(t("toasts.orderSuccess"), {
        description: t("toasts.orderSuccessDescription"),
      });

      // Limpar carrinho
      setPasteis([]);

      // Redirecionar para histórico se logado
      if (session) {
        setTimeout(() => {
          router.push("/perfil/pedidos");
        }, 2000);
      }
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error(t("toasts.orderError"));
    } finally {
      setFinalizando(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen mt-24 pt-24 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-vegGreen" />
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-24 pt-24 space-y-16">
      {/* Hero Section */}
      <div className="relative px-4">
        <div className="w-full sm:w-5/6 md:w-3/4 lg:w-2/3 mx-auto text-center space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-holtwood text-vegBrown-dark flex items-center gap-4 justify-center">
            <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-vegYellow" />
            {t("title")}
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-vegBrown-light max-w-3xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.raw("subtitle") }}
          />
        </div>
      </div>

      {/* Toaster para notificações */}
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: "var(--font-gluten)",
          },
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Coluna de seleção de recheios */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-holtwood mb-4 sm:mb-6 md:mb-8 text-vegBrown-dark">
              {t("selectIngredientsTitle")}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
              {ingredientes.map((ingrediente) => (
                <button
                  key={ingrediente.id}
                  onClick={() => toggleRecheio(ingrediente.id)}
                  className={`relative flex flex-col items-center p-2 sm:p-3 md:p-4 rounded-xl transition-all duration-200 ${
                    ingrediente.selecionado
                      ? "bg-vegYellow/20 border-2 border-vegYellow shadow-md scale-105"
                      : "bg-background border-2 border-vegGreen/20 hover:border-vegYellow hover:shadow-md hover:scale-102"
                  }`}
                  title={`Selecionar ${ingrediente.name}`}
                  aria-label={`Selecionar recheio ${ingrediente.name}`}
                >
                  {ingrediente.selecionado && (
                    <div className="absolute -top-2 -right-2 bg-vegYellow text-white rounded-full w-6 h-6 flex items-center justify-center">
                      ✓
                    </div>
                  )}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-background mb-2 shadow-sm">
                    <Image
                      src={ingrediente.imageUrl}
                      alt={ingrediente.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="font-medium text-center text-vegBrown-dark text-xs sm:text-sm">
                    {ingrediente.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 w-full">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-holtwood text-vegBrown-dark">
                    {t("quantity")}
                  </h3>
                  <p className="text-sm text-vegBrown-light">
                    {t("quantityQuestion")}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={diminuirQuantidade}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-vegGreen text-vegGreen hover:bg-vegGreen hover:text-white transition-all shadow-sm"
                    title="Diminuir quantidade"
                    aria-label="Diminuir quantidade"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="mx-2 text-2xl font-bold w-8 text-center text-vegBrown-dark">
                    {quantidade}
                  </span>
                  <button
                    onClick={aumentarQuantidade}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-vegGreen text-vegGreen hover:bg-vegGreen hover:text-white transition-all shadow-sm"
                    title="Aumentar quantidade"
                    aria-label="Aumentar quantidade"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              <div className="text-sm text-vegBrown-light mb-6 bg-vegYellow/10 p-3 rounded-lg">
                <p dangerouslySetInnerHTML={{ __html: t.raw("pricingText") }} />
              </div>

              <button
                onClick={adicionarAoCarrinho}
                className="w-full bg-vegYellow hover:bg-vegYellow/90 text-white py-4 px-4 rounded-lg flex items-center justify-center transition-all font-holtwood text-lg shadow-md hover:shadow-lg hover:scale-105"
              >
                <ShoppingCart className="mr-2" size={22} />
                {t("addToCart")}
              </button>
            </div>
          </div>

          {/* Coluna do carrinho - Desktop apenas */}
          <div className="hidden md:flex bg-white rounded-2xl shadow-lg p-8 flex-col h-fit hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-holtwood mb-8 text-vegBrown-dark text-center">
              {t("myPastels")}
            </h2>

            {/* Área do carrinho com altura fixa */}
            <div className="flex-1 flex flex-col min-h-[400px] max-h-[500px]">
              {pasteis.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 mx-auto mb-6 text-vegYellow/40">
                    <ShoppingCart size={96} strokeWidth={1.5} />
                  </div>
                  <p className="text-vegBrown-dark font-semibold text-lg">
                    {t("emptyCart")}
                  </p>
                  <p
                    className="text-sm text-vegBrown-light mt-2"
                    dangerouslySetInnerHTML={{
                      __html: t.raw("emptyCartDescription"),
                    }}
                  />
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4 relative">
                  {pasteis.map((pastel) => (
                    <div
                      key={pastel.id}
                      className="flex items-start p-4 bg-background rounded-xl border-2 border-transparent hover:border-vegYellow/30 transition-all shadow-sm hover:shadow-md"
                    >
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-vegYellow/10 mr-4 flex-shrink-0 shadow-sm">
                        <Image
                          src="/flavours/carne-de-jaca.avif"
                          alt="Pastel"
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-vegBrown-dark">
                            {t("customPastel")}
                          </h3>
                          <button
                            onClick={() => removerDoCarrinho(pastel.id)}
                            className="text-vegYellow hover:text-vegYellow/80 transition-colors"
                            title="Remover do carrinho"
                            aria-label="Remover pastel do carrinho"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-sm text-vegBrown-light mt-1">
                          {pastel.ingredientIds
                            .map((id) => getNomeRecheio(id))
                            .join(", ")}
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-vegBrown-light">
                            {t("qty")} {pastel.quantidade}
                          </span>
                          <span className="font-medium text-vegBrown-dark">
                            {formatarPreco(pastel.preco)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-6 mt-auto w-full">
              <div className="flex justify-between items-center mb-6 bg-vegYellow/10 p-4 rounded-lg">
                <span className="text-xl font-holtwood text-vegBrown-dark">
                  {t("total")}
                </span>
                <span className="text-2xl font-bold text-vegYellow">
                  {formatarPreco(total)}
                </span>
              </div>

              <button
                disabled={pasteis.length === 0 || finalizando}
                onClick={finalizarPedido}
                className={`w-full py-4 px-4 rounded-lg flex items-center justify-center transition-all font-holtwood text-lg shadow-md ${
                  pasteis.length > 0 && !finalizando
                    ? "bg-vegGreen hover:bg-vegGreen/90 text-white hover:scale-105 hover:shadow-lg"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                {finalizando ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={20} />
                    {t("processing")}
                  </>
                ) : (
                  t("checkout")
                )}
              </button>
            </div>
          </div>
        </div>

        {/* FAB Mobile - Carrinho flutuante */}
        <div className="md:hidden fixed bottom-6 right-6 z-50">
          <button
            type="button"
            onClick={() => {
              if (pasteis.length > 0) {
                toast.info(t("myPastels"), {
                  description: `${pasteis.length} ${pasteis.length === 1 ? "pastel" : "pastéis"} - ${formatarPreco(total)}`,
                  duration: 5000,
                });
              } else {
                toast.info(t("emptyCart"));
              }
            }}
            className="relative bg-vegYellow hover:bg-vegYellow/90 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
          >
            <ShoppingCart size={28} />
            {pasteis.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-vegRed text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
                {pasteis.length}
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Sugestões de combinações */}
      <div className="py-16 md:py-24 bg-vegGreen/10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-60">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-holtwood text-center mb-8 text-vegBrown-dark">
            {t("popularCombos.title")}
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-vegBrown-light text-center mb-12 max-w-2xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.raw("popularCombos.subtitle") }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                nomeKey: "classicoVegano",
                recheios: ["Jaca", "Tomate", "Cebola"],
                imagem: "/flavours/carne-de-jaca.avif",
              },
              {
                nomeKey: "funghiEspecial",
                recheios: ["Shimeji", "Shiitake", "Tofu"],
                imagem: "/flavours/shiitake.jpg",
              },
              {
                nomeKey: "hortaFresca",
                recheios: ["Escarola", "Brócolis", "Berinjela"],
                imagem: "/flavours/escarola.webp",
              },
              {
                nomeKey: "proteicoPower",
                recheios: ["Tofu", "Soja", "Palmito"],
                imagem: "/flavours/tofu.webp",
              },
              {
                nomeKey: "tropicalMix",
                recheios: ["Palmito", "Milho", "Tomate"],
                imagem: "/flavours/palmito.webp",
              },
              {
                nomeKey: "cogumelosCia",
                recheios: ["Shiitake", "Shimeji", "Cebola"],
                imagem: "/flavours/shimeji.jpg",
              },
              {
                nomeKey: "verdeLeve",
                recheios: ["Brócolis", "Escarola", "Tomate"],
                imagem: "/flavours/brocolis.webp",
              },
              {
                nomeKey: "saborCampo",
                recheios: ["Milho", "Berinjela", "Cebola"],
                imagem: "/flavours/milho.webp",
              },
              {
                nomeKey: "nutritivoPLus",
                recheios: ["Soja", "Brócolis", "Palmito"],
                imagem: "/flavours/soja.webp",
              },
            ].map((combo, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-32 sm:h-40 md:h-48 rounded-t-2xl overflow-hidden">
                  <Image
                    src={combo.imagem}
                    alt={t(`combos.${combo.nomeKey}`)}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="font-holtwood text-xl mb-2 text-vegBrown-dark">
                    {t(`combos.${combo.nomeKey}`)}
                  </h3>
                  <p className="text-vegBrown-light text-sm mb-4 leading-relaxed">
                    {combo.recheios.join(" • ")}
                  </p>
                  <button
                    onClick={() => {
                      toast.success(
                        t("popularCombos.added", {
                          name: t(`combos.${combo.nomeKey}`),
                        }),
                        {
                          description: `${t("popularCombos.fillings")} ${combo.recheios.join(", ")}`,
                        },
                      );
                    }}
                    className="w-full bg-vegYellow/10 hover:bg-vegYellow hover:text-white text-vegYellow py-2.5 rounded-lg transition-all font-holtwood shadow-sm hover:shadow-md"
                  >
                    {t("popularCombos.addToCart")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
