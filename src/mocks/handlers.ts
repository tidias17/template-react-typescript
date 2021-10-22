import { ENDPOINT } from './constants';
import { rest } from './utils';
import { loginTemplate } from './json-templates/auth/login'

export const handlers = [
  rest.get(ENDPOINT.TEST, () => require('./json-templates/test.json'), {}),
  rest.post(ENDPOINT.AUTH_LOGIN, () => loginTemplate, {}),
  rest.get(ENDPOINT.AUTH_CHECK_LOGIN, () => loginTemplate, {}),
];
