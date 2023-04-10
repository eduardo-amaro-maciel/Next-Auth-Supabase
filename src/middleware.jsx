import { NextResponse } from "next/server";
import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";

const protectedRoutes = [
    '/logado',
]

export default async function middleware(req) {

    const res = NextResponse.next()
    const pathname = req.nextUrl.pathname;
    const supabase = createMiddlewareSupabaseClient({req, res})
    const { data: { session }} = await supabase.auth.getSession()
    const isProtected = protectedRoutes.includes(pathname)
    
    if (!session && isProtected) {
        return NextResponse.redirect('http://localhost:3000/')
    }

    if (session && pathname === '/') {
        return NextResponse.redirect('http://localhost:3000/logado') 
    }

    return res
}

export const config = {
    matcher: [ '/', '/logado'],
}
