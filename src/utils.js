export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const API_URL = 'http://3.16.137.128:80';
