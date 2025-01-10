import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();

    if (url.pathname.startsWith('/admin')) {
        const adminToken = request.cookies.get('admin_token')?.value;

        if (!adminToken) {
          url.pathname = '/auth/login';
          return NextResponse.redirect(url);
        }
      }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
}