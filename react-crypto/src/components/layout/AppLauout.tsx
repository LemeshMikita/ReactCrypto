import { Layout, Spin } from 'antd';
import { AppHeader } from './AppHeader';
import { AppSider } from './AppSider';
import { AppContant } from './AppContent';
import { useContext } from 'react';
import { CryptoContext } from '../../context/crypto-context';

export const AppLayout = () => {
  const { loading }: { loading: boolean } = useContext(CryptoContext);
  if(loading) {
    return <Spin fullscreen />;
  }
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContant />
      </Layout>
    </Layout>
  );
};