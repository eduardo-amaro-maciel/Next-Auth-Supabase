'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/hooks/useSupabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()
  const { supabase } = useSupabase()

  async function handleLogin(event) {
    event.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      alert('deu erro')
    }

    if (data) {
      router.push('/logado')
    }
  } 

  return (
    <form onSubmit={e => handleLogin(e)} className="login-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="login-form-btn">
        Login
      </button>
    </form>
  );
}