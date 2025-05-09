import { createServerClient, type CookieOptions } from '@supabase/ssr'

export function createClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return ''
        },
        set(name: string, value: string, options: CookieOptions) {
          // No-op
        },
        remove(name: string, options: CookieOptions) {
          // No-op
        },
      },
    }
  )
} 