import React, { useEffect, useState } from 'react';
import { Layout, Select, Space, Button } from 'antd';
import { useCrypto } from '../../context/crypto-context';

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const options: any = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
];


const headerStyle: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
  height: 60,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white'
};
export const AppHeader = () => {
  const [select, setSelect] = useState(false);
  const { crypto }: any = useCrypto();
  useEffect(() => {
    const keypress = (event: any) => {
      if(event.key === '/') {
        setSelect(true);
      }
    } 
    document.addEventListener('keypress', keypress);
    return () =>  document.removeEventListener('keypress', keypress);
  }, []);

  const handleSelect = () => {

  }
  return <Layout.Header style={headerStyle}>
    <Select 
      mode='multiple'
      style={{ width: 250 }}
      value={['press / to open']}
      open={select}
      onSelect={handleSelect}
      optionLabelProp='label'
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
    <Button type='primary'>Add asset</Button>
  </Layout.Header>;
};