// src/middleware.ts
import {createClient } from "./utils/supabase/server";
import { NextResponse, type NextRequest } from "next/server";



export default async function updateSession(request: NextRequest) {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();
  console.log("MIDDLEWARE_USER", user);

  if (!user && !request.nextUrl.pathname.startsWith('/')) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

