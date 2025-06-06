export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const API_URL = 'http://3.14.129.185:80';
