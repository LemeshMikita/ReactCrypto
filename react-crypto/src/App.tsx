import React from 'react';
import { Layout } from 'antd';
import { AppHeader } from './components/layout/AppHeader';
import { AppSider } from './components/layout/AppSider';



const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

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
        <Layout.Content style={contentStyle}>Content</Layout.Content>
      </Layout>
      <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
    </Layout>
  );
}

export default App;
