import React, { useEffect, useState } from 'react';
import { Layout, Card, Statistic, List, Typography, Spin } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { fakeFetchCryptoAssets, fakeFetchCryptoData } from '../../api';
import { ItemType, AssetItemType } from '../../constants/constants';

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
export const AppSider = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [crypto, setCrypto] = useState<Array<ItemType>>([]);
  const [assets, setAssets] = useState<Array<AssetItemType>>([]);
  useEffect(() => {
    async function prelode() {
      setLoading(true);
      const { result }: any = await fakeFetchCryptoData();
      const assets: any = await fakeFetchCryptoAssets(); 
      setAssets(assets);
      setCrypto(result);
      setLoading(false);
    }
    prelode();
  }, []);

  if(loading) {
    return <Spin fullscreen />
  }
  return (
    <Layout.Sider width='25%' style={siderStyle}>
      <Card style={{marginBottom: '1rem'}}>
        <Statistic
          title='Active'
          value={11.28}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          prefix={<ArrowUpOutlined />}
          suffix='%'
        />
        <List
          size='small'
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </Card>
      <Card>
        <Statistic
          title='Idle'
          value={9.3}
          precision={2}
          valueStyle={{ color: '#cf1322' }}
          prefix={<ArrowDownOutlined />}
          suffix='%'
        />
      </Card>
    </Layout.Sider>
  );
};