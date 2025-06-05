export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const API_URL = 'http://127.0.0.1:80';