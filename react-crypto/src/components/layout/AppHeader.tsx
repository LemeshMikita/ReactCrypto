import React, { useEffect, useState } from 'react';
import { Layout, Select, Space, Button, Modal } from 'antd';
import { useCrypto } from '../../context/crypto-context';

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
  const { crypto }: any = useCrypto();
  const handleOk = () => {
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };
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
    setModal(true);
  }
  return <Layout.Header style={headerStyle}>
    <Select 
      mode='multiple'
      style={{ width: 250 }}
      value={['press / to open']}
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
    <Button type='primary'>Add asset</Button>
    <Modal open={modal} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
  </Layout.Header>;
};