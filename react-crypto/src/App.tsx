import React from 'react';
import { Layout } from 'antd';
import { AppHeader } from './components/layout/AppHeader';
import { AppSider } from './components/layout/AppSider';
import { AppContant } from './components/layout/AppContent';


const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContant />
      </Layout>
      <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
    </Layout>
  );
}

export default App;
