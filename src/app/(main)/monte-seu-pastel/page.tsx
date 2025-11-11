'use client';

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Minus, Plus, ShoppingCart, Trash2, Loader2 } from "lucide-react"
import { toast, Toaster } from "sonner"

// Tipos para os recheios e pastéis
type Ingredient = {
  id: string
  name: string
  slug: string
  description: string
  imageUrl: string
  isVegan: boolean
  isOrganic: boolean
  isActive: boolean
  selecionado?: boolean
}

type Pastel = {
  id: string
  ingredientIds: string[]
  quantidade: number
  preco: number
}

export default function MonteSeuPastel() {
  const { data: session } = useSession()
  const router = useRouter()

  // Estado para os recheios disponíveis
  const [ingredientes, setIngredientes] = useState<Ingredient[]>([])
  const [loading, setLoading] = useState(true)

  // Estado para a quantidade de pastéis
  const [quantidade, setQuantidade] = useState(1)

  // Estado para os pastéis no carrinho
  const [pasteis, setPasteis] = useState<Pastel[]>([])

  // Estado para o total do pedido
  const [total, setTotal] = useState(0)

  // Estado para finalização de pedido
  const [finalizando, setFinalizando] = useState(false)

  // Carregar ingredientes do banco
  useEffect(() => {
    async function fetchIngredientes() {
      try {
        const response = await fetch('/api/ingredients')
        if (!response.ok) throw new Error('Failed to fetch ingredients')

        const data = await response.json()
        setIngredientes(data.map((ing: Ingredient) => ({ ...ing, selecionado: false })))
      } catch (error) {
        console.error('Error loading ingredients:', error)
        toast.error('Erro ao carregar ingredientes')
      } finally {
        setLoading(false)
      }
    }

    fetchIngredientes()
  }, [])

  // Função para selecionar/deselecionar um recheio
  const toggleRecheio = (id: string) => {
    const recheiosSelecionados = ingredientes.filter((r) => r.selecionado).length
    const recheio = ingredientes.find((r) => r.id === id)

    if (recheio && !recheio.selecionado && recheiosSelecionados >= 5) {
      toast.error("Você pode selecionar no máximo 5 recheios por pastel")
      return
    }

    setIngredientes(ingredientes.map((r) => (r.id === id ? { ...r, selecionado: !r.selecionado } : r)))
  }

  // Função para aumentar a quantidade
  const aumentarQuantidade = () => {
    if (quantidade < 10) {
      setQuantidade(quantidade + 1)
    } else {
      toast.error("Máximo de 10 pastéis por pedido")
    }
  }

  // Função para diminuir a quantidade
  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1)
    }
  }

  // Função para adicionar ao carrinho
  const adicionarAoCarrinho = () => {
    const recheiosSelecionados = ingredientes.filter((r) => r.selecionado)

    if (recheiosSelecionados.length === 0) {
      toast.error("Selecione pelo menos um recheio")
      return
    }

    const novoPastel: Pastel = {
      id: `pastel-${Date.now()}`,
      ingredientIds: recheiosSelecionados.map((r) => r.id),
      quantidade: quantidade,
      preco: calcularPreco(recheiosSelecionados.length, quantidade),
    }

    setPasteis([...pasteis, novoPastel])

    // Resetar seleções
    setIngredientes(ingredientes.map((r) => ({ ...r, selecionado: false })))
    setQuantidade(1)

    toast.success("Pastel adicionado ao carrinho!", {
      description: `${quantidade}x Pastel com ${recheiosSelecionados.map(r => r.name).join(", ")}`
    })
  }

  // Função para remover do carrinho
  const removerDoCarrinho = (id: string) => {
    setPasteis(pasteis.filter((p) => p.id !== id))
    toast.success("Pastel removido do carrinho")
  }

  // Função para calcular o preço
  const calcularPreco = (numRecheios: number, qtd: number) => {
    const precoBase = 14.99
    const recheiosInclusos = 3
    const precoRecheioExtra = 1.99

    let preco = precoBase
    if (numRecheios > recheiosInclusos) {
      preco += (numRecheios - recheiosInclusos) * precoRecheioExtra
    }

    return preco * qtd
  }

  // Atualizar o total quando o carrinho mudar
  useEffect(() => {
    const novoTotal = pasteis.reduce((acc, pastel) => acc + pastel.preco, 0)
    setTotal(novoTotal)
  }, [pasteis])

  // Função para obter o nome do recheio pelo ID
  const getNomeRecheio = (id: string) => {
    const recheio = ingredientes.find((r) => r.id === id)
    return recheio ? recheio.name : ""
  }

  // Função para formatar preço
  const formatarPreco = (preco: number) => {
    return `R$ ${preco.toFixed(2).replace(".", ",")}`
  }

  // Função para finalizar pedido
  const finalizarPedido = async () => {
    if (pasteis.length === 0) return

    setFinalizando(true)

    try {
      // Preparar dados do pedido
      const orderData = {
        items: pasteis.map((pastel) => ({
          type: 'CUSTOM' as const,
          ingredientIds: pastel.ingredientIds,
          quantity: pastel.quantidade,
        })),
        customerName: session?.user?.name || '',
        customerEmail: session?.user?.email || '',
      }

      // Se não estiver logado, pedir informações
      if (!session) {
        const nome = prompt('Digite seu nome:')
        const email = prompt('Digite seu email:')

        if (!nome || !email) {
          toast.error('Nome e email são obrigatórios')
          setFinalizando(false)
          return
        }

        orderData.customerName = nome
        orderData.customerEmail = email
      }

      // Criar pedido
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error('Failed to create order')
      }

      const order = await response.json()

      toast.success('Pedido criado com sucesso!', {
        description: `Pedido #${order.id.substring(0, 8)} - Total: ${formatarPreco(total)}`
      })

      // Limpar carrinho
      setPasteis([])

      // Redirecionar para histórico se logado
      if (session) {
        setTimeout(() => {
          router.push('/perfil/pedidos')
        }, 2000)
      }
    } catch (error) {
      console.error('Error creating order:', error)
      toast.error('Erro ao criar pedido. Tente novamente.')
    } finally {
      setFinalizando(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen mt-24 pt-24 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-vegGreen" />
      </div>
    )
  }

  return (
    <div className="min-h-screen mt-24 pt-24 space-y-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-2/3 mx-auto text-center">
          <h1 className="text-4xl font-holtwood mb-10 text-vegBrown-dark">MONTE SEU PASTEL</h1>
          <p className="text-2xl text-vegBrown-light max-w-3xl mx-auto">
            Escolha os recheios e crie combinações deliciosas para o seu pastel vegano. Até três recheios estão
            inclusos no preço base.
          </p>
        </div>
      </div>

      {/* Toaster para notificações */}
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: 'var(--font-gluten)',
          },
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-60">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Coluna de seleção de recheios */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-holtwood mb-6 text-vegBrown-dark">SELECIONE OS RECHEIOS</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {ingredientes.map((ingrediente) => (
                <button
                  key={ingrediente.id}
                  onClick={() => toggleRecheio(ingrediente.id)}
                  className={`relative flex flex-col items-center p-4 rounded-lg transition-all ${
                    ingrediente.selecionado
                      ? "bg-vegYellow/10 border-2 border-vegYellow"
                      : "bg-background border border-vegGreen/20 hover:border-vegGreen"
                  }`}
                  title={`Selecionar ${ingrediente.name}`}
                  aria-label={`Selecionar recheio ${ingrediente.name}`}
                >
                  {ingrediente.selecionado && (
                    <div className="absolute -top-2 -right-2 bg-vegYellow text-white rounded-full w-6 h-6 flex items-center justify-center">
                      ✓
                    </div>
                  )}
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-background mb-2 shadow-sm">
                    <Image
                      src={ingrediente.imageUrl}
                      alt={ingrediente.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="font-medium text-center text-vegBrown-dark">{ingrediente.name}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-holtwood text-vegBrown-dark">Quantidade</h3>
                  <p className="text-sm text-vegBrown-light">Quantos pastéis deste sabor?</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={diminuirQuantidade}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-vegGreen text-vegGreen hover:bg-vegGreen hover:text-white transition-all"
                    title="Diminuir quantidade"
                    aria-label="Diminuir quantidade"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-4 text-xl font-bold w-6 text-center text-vegBrown-dark">{quantidade}</span>
                  <button
                    onClick={aumentarQuantidade}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-vegGreen text-vegGreen hover:bg-vegGreen hover:text-white transition-all"
                    title="Aumentar quantidade"
                    aria-label="Aumentar quantidade"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="text-sm text-vegBrown-light mb-6">
                <p>Até três recheios inclusos. Será cobrada uma taxa de R$ 1,99 por recheio adicional.</p>
              </div>

              <button
                onClick={adicionarAoCarrinho}
                className="w-full bg-vegYellow hover:bg-vegYellow/90 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors font-holtwood"
              >
                <ShoppingCart className="mr-2" size={20} />
                ADICIONAR AO CARRINHO
              </button>
            </div>
          </div>

          {/* Coluna do carrinho */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-fit">
            <h2 className="text-2xl font-holtwood mb-6 text-vegBrown-dark text-center">MEUS PASTEIZINHOS</h2>

            {/* Área do carrinho com altura fixa */}
            <div className="flex-1 flex flex-col min-h-[400px] max-h-[500px]">
              {pasteis.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 mx-auto mb-4 text-vegGreen/30">
                    <ShoppingCart size={80} />
                  </div>
                  <p className="text-vegBrown-light">Seu carrinho está vazio</p>
                  <p className="text-sm text-vegBrown-light mt-2">Adicione alguns pastéis deliciosos!</p>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4 relative">
                  {pasteis.map((pastel) => (
                    <div key={pastel.id} className="flex items-start p-4 bg-background rounded-lg border border-transparent hover:border-vegGreen/10 transition-all">
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
                          <h3 className="font-medium text-vegBrown-dark">Pastel Personalizado</h3>
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
                          {pastel.ingredientIds.map((id) => getNomeRecheio(id)).join(", ")}
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-vegBrown-light">Qtd: {pastel.quantidade}</span>
                          <span className="font-medium text-vegBrown-dark">{formatarPreco(pastel.preco)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-4 mt-auto w-full">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-holtwood text-vegBrown-dark">TOTAL</span>
                <span className="text-xl font-bold text-vegYellow">{formatarPreco(total)}</span>
              </div>

              <button
                disabled={pasteis.length === 0 || finalizando}
                onClick={finalizarPedido}
                className={`w-full py-3 px-4 rounded-lg flex items-center justify-center transition-colors font-holtwood ${
                  pasteis.length > 0 && !finalizando
                    ? "bg-vegGreen hover:bg-vegGreen/90 text-white"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                {finalizando ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={20} />
                    PROCESSANDO...
                  </>
                ) : (
                  'FINALIZAR PEDIDO'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sugestões de combinações */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-60">
          <h2 className="text-3xl font-holtwood text-center mb-12 text-vegBrown-dark">COMBINAÇÕES POPULARES</h2>
          <p className="text-lg text-vegBrown-light text-center mb-8 max-w-2xl mx-auto">
            Experimente nossas combinações especialmente criadas para oferecer o máximo de sabor e nutrição
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                nome: "Clássico Vegano",
                recheios: ["Jaca", "Tomate", "Cebola"],
                imagem: "/flavours/carne-de-jaca.avif",
              },
              {
                nome: "Funghi Especial",
                recheios: ["Shimeji", "Shiitake", "Tofu"],
                imagem: "/flavours/shiitake.jpg",
              },
              {
                nome: "Horta Fresca",
                recheios: ["Escarola", "Brócolis", "Berinjela"],
                imagem: "/flavours/escarola.webp",
              },
              {
                nome: "Proteico Power",
                recheios: ["Tofu", "Soja", "Palmito"],
                imagem: "/flavours/tofu.webp",
              },
              {
                nome: "Tropical Mix",
                recheios: ["Palmito", "Milho", "Tomate"],
                imagem: "/flavours/palmito.webp",
              },
              {
                nome: "Cogumelos & Cia",
                recheios: ["Shiitake", "Shimeji", "Cebola"],
                imagem: "/flavours/shimeji.jpg",
              },
              {
                nome: "Verde & Leve",
                recheios: ["Brócolis", "Escarola", "Tomate"],
                imagem: "/flavours/brocolis.webp",
              },
              {
                nome: "Sabor do Campo",
                recheios: ["Milho", "Berinjela", "Cebola"],
                imagem: "/flavours/milho.webp",
              },
              {
                nome: "Nutritivo Plus",
                recheios: ["Soja", "Brócolis", "Palmito"],
                imagem: "/flavours/soja.webp",
              },
            ].map((combo, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48 rounded-t-xl overflow-hidden">
                  <Image src={combo.imagem} alt={combo.nome} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-holtwood text-lg mb-2 text-vegBrown-dark">{combo.nome}</h3>
                  <p className="text-vegBrown-light text-sm mb-4">{combo.recheios.join(", ")}</p>
                  <button
                    onClick={() => {
                      toast.success(`${combo.nome} adicionado ao carrinho!`, {
                        description: `Recheios: ${combo.recheios.join(", ")}`
                      })
                    }}
                    className="w-full bg-vegYellow/10 hover:bg-vegYellow/20 text-vegYellow py-2 rounded-lg transition-colors font-holtwood"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
