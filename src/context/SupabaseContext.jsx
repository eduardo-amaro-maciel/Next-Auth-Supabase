"use client"

import { createContext, useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

export const SupabaseContext = createContext(undefined)

export default function SupabaseProvider({ children }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SupabaseContext.Provider value={{ supabase }}>
      <>{children}</>
    </SupabaseContext.Provider>
  );
}