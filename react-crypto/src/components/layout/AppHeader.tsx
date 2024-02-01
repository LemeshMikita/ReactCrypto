import React from 'react';
import { Layout } from 'antd';

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
  return <Layout.Header style={headerStyle}>Header</Layout.Header>;
};