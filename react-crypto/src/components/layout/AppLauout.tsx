import { Layout } from 'antd';
import { AppHeader } from './AppHeader';
import { AppSider } from './AppSider';
import { AppContant } from './AppContent';

export const AppLayout = () => {
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