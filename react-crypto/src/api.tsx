import { cryptoAssets, cryptoData } from './constants/constants';

export const fakeFetchCryptoAssets = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 2000);
  });
};

export const fakeFetchCryptoData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 2000);
  });
};