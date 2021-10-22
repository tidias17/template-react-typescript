const ACCESS_TOKEN_STORAGE_KEY = 'access_token';

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
}

export function setAccessToken(value: string) {
  localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, value);
}
