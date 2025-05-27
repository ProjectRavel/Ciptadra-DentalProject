// middleware.ts atau middleware.js
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Logic kamu di sini
  return NextResponse.next()
}
