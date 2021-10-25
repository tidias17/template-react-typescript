import { ENDPOINT } from './constants';
import { rest } from './utils';
import { loginTemplate } from './json-templates/auth/login';

export const handlers = [
  rest.get(ENDPOINT.TEST, () => require('./json-templates/test.json'), {}),
  rest.post(ENDPOINT.AUTH_LOGIN, () => loginTemplate, {}),
  rest.get(ENDPOINT.AUTH_CHECK_LOGIN, () => loginTemplate, {}),
  // Alternativa para testar o retrno 401 da API e realizar o deslogamento do user
  // rest.get(ENDPOINT.AUTH_CHECK_LOGIN, (req, res, ctx) => res(ctx.status(401)), {}),
];
