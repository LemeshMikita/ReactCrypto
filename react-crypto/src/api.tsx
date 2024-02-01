import { cryptoAssets, cryptoData } from './constants/constants';

export const fakeFetchCryptoAssets = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 2);
  });
};

export const fakeFetchCryptoData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 2);
  });
};