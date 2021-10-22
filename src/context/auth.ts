import { PERMISSION } from 'constants/auth';
import { createContext, useContext } from 'react';

type ValueOf<T> = T[keyof T];
type TPermission = ValueOf<typeof PERMISSION>;
type TPermissions = { [k in TPermission]?: boolean };

type TToken = {
  accessToken: any;
};

type TJwtDecoded = {
  id?: string,
  name?: string,
  email?: string,
  permissions?: any,
  rullersOperation?: any,
  rullersFuntion?: any,
};

type TAuthContextValue = {
  token: TToken;
  contentToken: TJwtDecoded;
  permissions: TPermissions;
  login(token: TToken): void;
  logout(): void;
  refetch(): void;
};

function noop() {}

const AuthContext = createContext<TAuthContextValue>({
  token: {} as TToken,
  contentToken: {} as TJwtDecoded,
  permissions: {},
  login: noop,
  logout: noop,
  refetch: noop,
});

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
