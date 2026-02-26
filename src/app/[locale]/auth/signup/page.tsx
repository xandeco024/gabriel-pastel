"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })

      if (response.ok) {
        alert("Conta criada! Agora faça login.")
        router.push("/auth/signin")
      } else {
        const error = await response.text()
        alert(`Erro: ${error}`)
      }
    } catch {
      alert("Erro ao criar conta")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background font-gluten">
      <div className="max-w-md w-full space-y-8 bg-pastel p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-vegGreen/20">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-holtwood text-vegGreen mb-2">GABRIEL PASTEL</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
            Criar conta
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-vegGreen-light mt-2">Junte-se à nossa família! 🌱</p>
        </div>

        <form className="mt-8 space-y-4 sm:space-y-5 md:space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2.5 sm:py-3 border-2 border-vegGreen/30 rounded-lg placeholder-vegGreen/50 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-vegGreen focus:border-vegGreen transition-colors"
                placeholder="Como você gostaria de ser chamado?"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2.5 sm:py-3 border-2 border-vegGreen/30 rounded-lg placeholder-vegGreen/50 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-vegGreen focus:border-vegGreen transition-colors"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={6}
                className="w-full px-4 py-2.5 sm:py-3 border-2 border-vegGreen/30 rounded-lg placeholder-vegGreen/50 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-vegGreen focus:border-vegGreen transition-colors"
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-xs text-vegGreen/70 mt-1">
                Use uma senha forte para proteger sua conta 🔒
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-lg text-background bg-vegGreen hover:bg-vegGreen-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vegGreen disabled:opacity-50 transition-all duration-200 shadow-md"
          >
            {loading ? "Criando conta..." : "CRIAR CONTA"}
          </button>

          <div className="bg-background/50 p-4 rounded-lg border border-vegGreen/20">
            <p className="text-sm text-vegGreen text-center">
              🎉 Ao criar sua conta, você terá acesso a:
            </p>
            <ul className="text-xs text-vegGreen-light mt-2 space-y-1">
              <li>• Pedidos mais rápidos</li>
              <li>• Histórico de compras</li>
              <li>• Ofertas exclusivas</li>
            </ul>
          </div>
        </form>

        <div className="text-center">
          <Link href="/auth/signin" className="text-vegGreen hover:text-vegYellow font-medium transition-colors duration-200">
            Já tem conta? <span className="underline">Fazer login</span>
          </Link>
        </div>

        <div className="text-center pt-4 border-t border-vegGreen/20">
          <Link href="/" className="text-vegGreen-light hover:text-vegYellow text-sm transition-colors duration-200">
            ← Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  )
}