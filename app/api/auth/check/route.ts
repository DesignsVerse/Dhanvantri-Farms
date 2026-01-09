import { NextRequest, NextResponse } from 'next/server';
import { validateSession } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get('admin-session')?.value;

    if (sessionToken && validateSession(sessionToken)) {
      return NextResponse.json({ success: true, authenticated: true });
    }

    return NextResponse.json(
      { success: false, authenticated: false },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, authenticated: false },
      { status: 401 }
    );
  }
}


