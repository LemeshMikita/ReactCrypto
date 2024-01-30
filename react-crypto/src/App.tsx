import React from 'react';
import { Layout } from 'antd';
import { AppHeader } from './components/layout/AppHeader';


const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
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
        <Layout.Sider width='25%' style={siderStyle}>
        Sider
        </Layout.Sider>
        <Layout.Content style={contentStyle}>Content</Layout.Content>
      </Layout>
      <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
    </Layout>
  );
}

export default App;
