export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const API_URL = 'http://3.145.53.193:80';
