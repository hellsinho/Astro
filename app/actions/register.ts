// app/actions/register.ts
'use server'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { registerSchema } from '@/lib/validations/auth'

export async function registerAction(formData: FormData) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  
  try {
    const { email, password, birthDate, birthPlace } = registerSchema.parse({
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