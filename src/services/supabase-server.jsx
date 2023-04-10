import { RequestCookies } from 'next/dist/server/web/spec-extension/cookies'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'

export const createClient = () =>
  createServerComponentSupabaseClient({
    headers: () => new Headers(),
    cookies: () => new RequestCookies(new Headers()),
  })