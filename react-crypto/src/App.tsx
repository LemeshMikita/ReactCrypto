import React from 'react';
import { Layout } from 'antd';
import { AppHeader } from './components/layout/AppHeader';
import { AppSider } from './components/layout/AppSider';
import { AppContant } from './components/layout/AppContent';

function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContant />
      </Layout>
    </Layout>
  );
}

export default App;
