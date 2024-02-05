import React, { useEffect, useState } from 'react';
import { Layout, Select, Space, Button, Modal, Drawer  } from 'antd';
import { useCrypto } from '../../context/crypto-context';
import { CoinInfoModal } from '../CryptoInfoModal';
import { AddAssetForm } from '../AddAssetForm';

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
  const [modal, setModal] = useState(false);
  const [coin, setCoin] = useState(null);
  const [drawer, setDrawer] = useState(true);
  const { crypto }: any = useCrypto();
  const handleCancel = () => {
    setModal(false);
  };
  useEffect(() => {
    const keypress = (event: any) => {
      if(event.key === '/') {
        setSelect(true);
      }
    }; 
    document.addEventListener('keypress', keypress);
    return () =>  document.removeEventListener('keypress', keypress);
  }, []);

  const handleSelect = (value: string) => {
    console.log(value);
    setCoin(crypto.find((c: any) => c.id === value));
    setModal(true);
  };
  return <Layout.Header style={headerStyle}>
    <Select 
      mode='multiple'
      style={{ width: 250 }}
      value={'press / to open'}
      open={select}
      onSelect={handleSelect}
      onClick={() => setSelect((prev) => !prev)}
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
    <Button type='primary' onClick={() => setDrawer(true)}>Add asset</Button>
    <Modal open={modal} onCancel={handleCancel} footer={null}>
      <CoinInfoModal coin={coin} />
    </Modal>
    <Drawer
      width={600}
      title='Add asset' onClose={() => setDrawer(false)}
      open={drawer}
      destroyOnClose
    >
      <AddAssetForm onClose={() => setDrawer(false)}/>
    </Drawer>
  </Layout.Header>;
};