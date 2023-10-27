import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getDataFromToken } from './helpers/getDataFromToken';
import axios from 'axios';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublic = path === '/login' || path === '/signup' || path === '/verifyemail';

  const token = request.cookies.get('token')?.value || '';

  if (isPublic && token) {
    return NextResponse.redirect(new URL(`/loading/`, request.nextUrl));
  }
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}


export const config = {
  matcher: [
    '/profile/:path*',
    '/login',
    '/signup',
    '/verifyemail'
  ]
}