"use client"

import { signIn, getSession } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (result?.ok) {
      router.push("/")
    } else {
      alert("Login falhou!")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background font-gluten">
      <div className="max-w-md w-full space-y-8 bg-pastel p-8 rounded-2xl shadow-lg border border-vegGreen/20">
        <div className="text-center">
          <h1 className="text-4xl font-holtwood text-vegGreen mb-2">GABRIEL PASTEL</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Entre na sua conta
          </h2>
          <p className="text-vegGreen-light mt-2">Bem-vindo de volta!</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border-2 border-vegGreen/30 rounded-lg placeholder-vegGreen/50 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-vegGreen focus:border-vegGreen transition-colors"
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
                className="w-full px-4 py-3 border-2 border-vegGreen/30 rounded-lg placeholder-vegGreen/50 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-vegGreen focus:border-vegGreen transition-colors"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-lg text-background bg-vegGreen hover:bg-vegGreen-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vegGreen disabled:opacity-50 transition-all duration-200 shadow-md"
          >
            {loading ? "Entrando..." : "ENTRAR"}
          </button>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-vegGreen/30" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-pastel text-vegGreen font-medium">Ou entre com</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => signIn("google")}
                className="w-full inline-flex justify-center py-3 px-4 border-2 border-vegGreen/30 rounded-lg shadow-sm bg-background text-sm font-medium text-vegGreen hover:bg-vegGreen hover:text-background transition-all duration-200"
              >
                🌱 Google
              </button>
              <button
                type="button"
                onClick={() => signIn("github")}
                className="w-full inline-flex justify-center py-3 px-4 border-2 border-vegGreen/30 rounded-lg shadow-sm bg-background text-sm font-medium text-vegGreen hover:bg-vegGreen hover:text-background transition-all duration-200"
              >
                🍃 GitHub
              </button>
            </div>
          </div>
        </form>

        <div className="text-center">
          <Link href="/auth/signup" className="text-vegGreen hover:text-vegYellow font-medium transition-colors duration-200">
            Não tem conta? <span className="underline">Criar conta</span>
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