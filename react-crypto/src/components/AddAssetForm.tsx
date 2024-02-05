import { useState } from 'react';
import { Select, Space, Typography } from 'antd';
import { useCrypto } from '../context/crypto-context';

export const AddAssetForm = () => {
   const { crypto }: any = useCrypto()
  const [coin, setCoin] = useState(null);

  if(!coin) {
    return (
        <Select 

      style={{ width: '100%' }}
  
      onSelect={(v) => setCoin(crypto.find((c: any) => c.id === v))}
      optionLabelProp='Select Coin'
      options={crypto.map((coin: any) => ({
        label: coin.name,
        value: coin.id,
        icon: coin.icon
      }))}
      optionRender={(option) => (
        <Space>
          <img style={{width: 20}} src={option.data.icon} alt={option.data.label} /> {option.data.label}
        </Space>
      )}/>
    )
  }
  return (
    <form>add form</form>
  );
};