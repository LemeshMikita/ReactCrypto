import React from 'react';
import { Layout } from 'antd';

export const AppSider = () => {
  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
  };
  return (
    <Layout.Sider width='25%' style={siderStyle}>
        Sider
    </Layout.Sider>
  );
};