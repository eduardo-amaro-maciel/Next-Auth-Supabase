"use client"

import { useSupabase } from "@/hooks/useSupabase";
import { useRouter } from "next/navigation"

export default function Logado() {
    const router = useRouter()
    const { supabase } = useSupabase()

    async function singOut(event) {
        event.preventDefault()
        await supabase.auth.signOut()
        router.push('/')
    }

    return (
        <main>
            <button onClick={event => singOut(event)}>Sair</button>
        </main>
    )
}
