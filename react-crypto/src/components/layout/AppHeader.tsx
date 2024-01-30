import React from 'react';
import { Layout } from 'antd';

export const AppHeader = () => {
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
  };
  return <Layout.Header style={headerStyle}>Header</Layout.Header>;
};