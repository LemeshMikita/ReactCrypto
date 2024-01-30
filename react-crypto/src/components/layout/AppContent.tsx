import React from 'react';
import { Layout } from 'antd';

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
export const AppContant = () => {
  return <Layout.Content style={contentStyle}>Content</Layout.Content>;
};