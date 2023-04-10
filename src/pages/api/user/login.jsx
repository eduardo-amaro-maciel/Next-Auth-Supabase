import { createClient } from "@/services/supabase-server";

export default async function login(req, res) {
    const supabase = createClient();

    const { data: { session }} = await supabase.auth.getSession()
    return res.status(200).json({ a:1 });
}