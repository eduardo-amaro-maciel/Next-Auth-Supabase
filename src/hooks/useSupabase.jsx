import { useContext } from "react"
import { SupabaseContext } from "@/context/SupabaseContext"

export const useSupabase = () => {
    const context = useContext(SupabaseContext)
  
    if (context === undefined) {
        throw new Error('useSupabase must be used inside SupabaseProvider')
    }
  
    return context
  }