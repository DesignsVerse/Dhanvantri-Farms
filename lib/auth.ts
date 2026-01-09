// Simple authentication for admin panel
// In production, use proper authentication (JWT, sessions, etc.)

export interface AdminCredentials {
  username: string;
  password: string;
}

// Default credentials - should be set via environment variables
const DEFAULT_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const DEFAULT_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export function verifyCredentials(username: string, password: string): boolean {
  return username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD;
}

export function createSession(): string {
  // Simple session token (in production, use proper JWT)
  return Buffer.from(`${Date.now()}-${Math.random()}`).toString('base64');
}

export function validateSession(sessionToken: string): boolean {
  // Simple validation (in production, use proper session management)
  // For now, we'll use a simple check
  return sessionToken && sessionToken.length > 0;
}


