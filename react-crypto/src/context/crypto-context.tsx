import React, { useEffect, useState, createContext, useContext } from 'react';
import { fakeFetchCryptoAssets, fakeFetchCryptoData } from '../api';
import { AssetItemType, ItemType } from '../constants/constants';
import { precentDifference } from '../utils';

export const CryptoContext: any = createContext({
  assets: [],
  crypto: [],
  loading: false
});

export const CryptoContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);
  useEffect(() => {
    async function prelode() {
      setLoading(true);
      const { result }: any = await fakeFetchCryptoData();
      const assets: any = await fakeFetchCryptoAssets(); 
      setAssets(assets.map((item: AssetItemType) => {
        const coin = result.find((c: ItemType) => c.id === item.id);
        return {
          grow: item.price < coin.price,
          growPrecent: precentDifference(item.price, coin.price),
          totalAnount: item.amount * coin.price,
          totalProfit: item.amount * coin.price - item.amount * item.price,
          id: item.id,
          amount: item.amount,
          price: item.price,
          date: new Date(),
        };
      }));
      setCrypto(result);
      setLoading(false);
    }
    prelode();
  }, []);
  return (
    <CryptoContext.Provider value={{loading, crypto, assets}}>
      {children}
    </CryptoContext.Provider>
  ) ;
};

export const useCrypto = () => {
  return useContext(CryptoContext);
};