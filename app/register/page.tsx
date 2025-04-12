import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ZodError } from 'zod'
import { registerSchema } from '@/lib/validations/auth'
import { GlassCard } from '../components/GlassCard'

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: { message?: string }
}) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const registerAction = async (formData: FormData) => {
    'use server'
    
    try {
      const { email, password, confirmPassword, birthDate, birthPlace } = registerSchema.parse({
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
        birthDate: formData.get('birthDate'),
        birthPlace: formData.get('birthPlace'),
      })

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            birth_date: birthDate,
            birth_place: birthPlace,
          }
        }
      })

      if (error) {
        return redirect('/register?message=' + encodeURIComponent(error.message))
      }

      return redirect('/dashboard?message=Check your email to confirm your account!')
    } catch (error) {
      if (error instanceof ZodError) {
        return redirect('/register?message=' + encodeURIComponent(error.errors[0].message))
      }
      return redirect('/register?message=' + encodeURIComponent('An unknown error occurred'))
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0F0F1A] to-[#1E075F]">
      {/* ... (background e container permanecem iguais) */}
      
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
        <GlassCard className="w-full max-w-md p-8">
          <h1 className="mb-6 text-3xl font-bold text-center font-playfair text-purple-300">
            Create Your Cosmic Account
          </h1>
          
          {/* Mensagem de erro - agora acessando searchParams corretamente */}
          {searchParams.message && (
            <div className="mb-4 p-3 bg-red-900/50 text-red-100 rounded-lg text-sm">
              {decodeURIComponent(searchParams.message)}
            </div>
          )}
          
          <form className="space-y-6" action={registerAction}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-100 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-2 bg-black/30 border border-purple-900/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-400"
                placeholder="your@cosmic.email"
              />
            </div>
            
            <div>
          <label htmlFor="password" className="block text-sm font-medium text-purple-100 mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="w-full px-4 py-2 bg-black/30 border border-purple-900/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-400"
            placeholder="••••••••"
          />
          <p className="mt-1 text-xs text-purple-300">
            Minimum 8 characters, 1 uppercase letter, and 1 number
          </p>
        </div>
        
        {/* Novo campo de confirmação de senha */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-purple-100 mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            className="w-full px-4 py-2 bg-black/30 border border-purple-900/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-400"
            placeholder="••••••••"
          />
        </div>
            
            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-purple-100 mb-1">
                Birth Date (for your astral chart)
              </label>
              <input
                id="birthDate"
                name="birthDate"
                type="datetime-local"
                required
                className="w-full px-4 py-2 bg-black/30 border border-purple-900/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
              />
            </div>
            
            <div>
              <label htmlFor="birthPlace" className="block text-sm font-medium text-purple-100 mb-1">
                Birth Place (city, country)
              </label>
              <input
                id="birthPlace"
                name="birthPlace"
                type="text"
                required
                className="w-full px-4 py-2 bg-black/30 border border-purple-900/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-400"
                placeholder="e.g. Rio de Janeiro, Brazil"
              />
            </div>
            
            <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-900/30"
        >
          Create Account
        </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-purple-300">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-gold-400 hover:text-gold-300 underline">
              Sign in
            </a>
          </div>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-900/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black/20 text-purple-300">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-black/30 border border-purple-900/50 rounded-lg font-medium text-white hover:bg-purple-900/20 transition-colors"
            >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-black/30 border border-purple-900/50 rounded-lg font-medium text-white hover:bg-purple-900/20 transition-colors"
            >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm6.25 10.5h-5.5v-5.5h-1.5v5.5h-5.5v1.5h5.5v5.5h1.5v-5.5h5.5v-1.5z" clipRule="evenodd" />
              </svg>
              Google
            </button>
          </div>
        </GlassCard>
      </main>
    </div>
  )
}