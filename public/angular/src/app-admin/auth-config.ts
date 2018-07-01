import { environment } from 'environments/environment';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'ZPQR7MgMmiaAGcFwDMgiR9YYsPfO1XOQ',
  CLIENT_DOMAIN: 'ccumissa.auth0.com',
  AUDIENCE: 'Rbai-Admin-API',
  REDIRECT: window.location.origin + environment.Auth0Redirect,
  SCOPE: 'openid profile'
};