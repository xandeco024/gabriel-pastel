"use client";

import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "signin" | "signup";
}

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = "signin",
}: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Sincronizar mode com initialMode quando modal abre
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
    }
  }, [isOpen, initialMode]);

  // Bloquear scroll do body quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup: garantir que o scroll seja restaurado ao desmontar
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Função para calcular força da senha
  const getPasswordStrength = (
    pwd: string,
  ): { level: number; label: string; color: string } => {
    if (pwd.length === 0) return { level: 0, label: "", color: "" };
    if (pwd.length < 4)
      return { level: 1, label: "Super Fraca", color: "bg-vegRed" };
    if (pwd.length < 6)
      return { level: 2, label: "Fraca", color: "bg-vegOrange" };

    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++;

    if (strength <= 1)
      return { level: 2, label: "Fraca", color: "bg-vegOrange" };
    if (strength === 2)
      return { level: 3, label: "Média", color: "bg-vegYellow" };
    return { level: 4, label: "Forte", color: "bg-vegGreen" };
  };

  const passwordStrength = getPasswordStrength(password);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      handleClose();
      router.refresh();
      toast.success("Login realizado com sucesso!");
    } else {
      toast.error("Login falhou! Verifique suas credenciais.");
    }
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar senha super fraca
    if (password.length < 4) {
      toast.error("Senha muito fraca!", {
        description: "Por favor, use pelo menos 4 caracteres.",
      });
      return;
    }

    // Validar confirmação de senha
    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem!", {
        description: "Verifique se digitou a mesma senha nos dois campos.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        toast.success("Conta criada com sucesso! Agora faça login.", {
          description: "Bem-vindo à família Gabriel Pastel! 🎉",
        });
        resetForm();
        setMode("signin");
      } else {
        const error = await response.text();
        toast.error("Erro ao criar conta", {
          description: error,
        });
      }
    } catch (error) {
      toast.error("Erro ao criar conta", {
        description: "Tente novamente mais tarde.",
      });
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl border-2 border-vegGreen/20 animate-in zoom-in-95 fade-in duration-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-vegGreen hover:text-vegRed transition-colors duration-200"
          aria-label="Fechar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-holtwood text-vegBrown-dark mb-2">
              GABRIEL PASTEL
            </h1>
            <h2 className="text-xl font-semibold text-foreground">
              {mode === "signin" ? "Entre na sua conta" : "Criar conta"}
            </h2>
            <p className="text-vegGreen-light mt-2">
              {mode === "signin"
                ? "Bem-vindo de volta!"
                : "Junte-se à nossa família! 🌱"}
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={mode === "signin" ? handleSignIn : handleSignUp}
            className="space-y-4"
          >
            {mode === "signup" && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-vegGreen/30 rounded-lg placeholder-vegGreen/50 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-vegGreen focus:border-vegGreen transition-colors"
                  placeholder="Como você gostaria de ser chamado?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 border-2 border-vegGreen/30 rounded-lg placeholder-vegGreen/50 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-vegGreen focus:border-vegGreen transition-colors"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={mode === "signup" ? 4 : 1}
                className="w-full px-4 py-3 border-2 border-vegGreen/30 rounded-lg placeholder-vegGreen/50 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-vegGreen focus:border-vegGreen transition-colors"
                placeholder={
                  mode === "signup" ? "Mínimo 4 caracteres" : "Sua senha"
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Medidor de força da senha - apenas no signup */}
              {mode === "signup" && password.length > 0 && (
                <div className="mt-2 space-y-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                          level <= passwordStrength.level
                            ? passwordStrength.color
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p
                    className={`text-xs font-medium ${
                      passwordStrength.level === 1
                        ? "text-vegRed"
                        : passwordStrength.level === 2
                          ? "text-vegOrange"
                          : passwordStrength.level === 3
                            ? "text-vegYellow"
                            : "text-vegGreen"
                    }`}
                  >
                    {passwordStrength.label}
                    {passwordStrength.level === 1 &&
                      " - Use pelo menos 4 caracteres"}
                    {passwordStrength.level === 2 &&
                      " - Tente adicionar números ou símbolos"}
                    {passwordStrength.level === 3 && " - Boa senha! 👍"}
                    {passwordStrength.level === 4 && " - Excelente! 🔒"}
                  </p>
                </div>
              )}
            </div>

            {/* Campo de confirmar senha - apenas no signup */}
            {mode === "signup" && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Confirmar senha
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  className={`w-full px-4 py-3 border-2 rounded-lg placeholder-vegGreen/50 text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-vegGreen transition-colors ${
                    confirmPassword.length > 0 && password !== confirmPassword
                      ? "border-vegRed focus:border-vegRed"
                      : "border-vegGreen/30 focus:border-vegGreen"
                  }`}
                  placeholder="Digite a senha novamente"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPassword.length > 0 && password !== confirmPassword && (
                  <p className="text-xs text-vegRed mt-1">
                    ⚠️ As senhas não coincidem
                  </p>
                )}
                {confirmPassword.length > 0 && password === confirmPassword && (
                  <p className="text-xs text-vegGreen mt-1">
                    ✓ Senhas coincidem!
                  </p>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 text-lg font-medium rounded-lg text-background bg-vegGreen hover:bg-vegYellow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vegGreen disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {mode === "signin" ? "Entrando..." : "Criando conta..."}
                </span>
              ) : mode === "signin" ? (
                "ENTRAR"
              ) : (
                "CRIAR CONTA"
              )}
            </button>
          </form>

          {/* Toggle Mode */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => {
                setMode(mode === "signin" ? "signup" : "signin");
                resetForm();
              }}
              className="text-vegGreen hover:text-vegYellow font-medium transition-colors duration-200"
            >
              {mode === "signin" ? (
                <>
                  Não tem conta? <span className="underline">Criar conta</span>
                </>
              ) : (
                <>
                  Já tem conta? <span className="underline">Fazer login</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
