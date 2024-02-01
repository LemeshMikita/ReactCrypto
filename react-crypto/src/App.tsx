import React from 'react';
import { Layout } from 'antd';
import { AppHeader } from './components/layout/AppHeader';
import { AppSider } from './components/layout/AppSider';
import { AppContant } from './components/layout/AppContent';
import { CryptoContextProvider } from './context/crypto-context';

function App() {
  return (
    <CryptoContextProvider>
      <Layout>
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContant />
        </Layout>
      </Layout>
    </CryptoContextProvider>
  );
}

export default App;
