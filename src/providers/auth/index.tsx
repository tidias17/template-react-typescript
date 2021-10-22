import { useCallback, useMemo, useState } from 'react';
import jwt_decode from 'jwt-decode';
import api from 'services/api';
import { useQuery } from 'react-query';
import * as storage from './storage';
import { Loader } from 'components/Loader';
import AuthContext from 'context/auth';

const getPermissions = (contentToken:any) => {
  const permissions = contentToken.permissions || [];
  return permissions.reduce(
    (nextPermissions:any, key:number) => ({
      ...nextPermissions,
      [key]: true,
    }),
    {}
  );
}

type TContentToken = {
  name?: string;
  email?: string;
  permissions?: any;
};

const AuthProvider = ({ children }:any) => {
  const accessToken = useMemo(storage.getAccessToken, []);
  const [contentToken, setContentToken] = useState<Partial<TContentToken>>({});
  const [token, setToken] = useState({accessToken: null});
  const permissions = useMemo(() => getPermissions(contentToken), [contentToken]);

  const outsideLoggedArea = () => {
    return (window.location.pathname !== "/")
  }

  const login = useCallback(data => {
    setContentToken(jwt_decode(data.accessToken));
    setToken(data);
    storage.setAccessToken(data.accessToken);
  }, []);
  const logout = useCallback(() => {
    setToken({accessToken: null});
    setContentToken({});
    storage.setAccessToken('');
    window.location.reload();
  }, []);

  const { isLoading, refetch } = useQuery(
    'authCheckLogin',
    () =>
      api
        .get('v1/auth/check-login', {
          headers: { Authorization: `Bearer ${token.accessToken || storage.getAccessToken()}` },
        })
        .then(login),
    {
      retry: false,
      enabled: (!!accessToken && outsideLoggedArea()),
      onError: logout,
    }
  );

  const providerValue = useMemo(
    () => ({
      token,
      contentToken,
      permissions,
      login,
      logout,
      refetch,
    }),
    [token, contentToken, permissions, login, logout, refetch]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {isLoading ? <Loader type="fullscreen" /> : children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
