import React, { useEffect, useState } from 'react';
import { Layout, Card, Statistic, List, Typography, Spin } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { fakeFetchCryptoAssets, fakeFetchCryptoData } from '../../api';
import { ItemType, AssetItemType } from '../../constants/constants';
import { precentDifference } from '../../utils';

type CardAssetType = {
  grow: number,
  growPrecent: (a: number, b: number) => number,
  totalAnount: number,
  totalProfit: number,
  id: string,
  amount: number,
  price: number,
  date: Date,
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

export const AppSider = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);
  useEffect(() => {
    async function prelode() {
      setLoading(true);
      const { result }: any = await fakeFetchCryptoData();
      const assets: any = await fakeFetchCryptoAssets(); 
      setAssets(assets.map((item: AssetItemType) => {
        const coin = result.find((c: ItemType) => c.id === item.id);
        return {
          grow: item.price < coin.price,
          growPrecent: precentDifference(item.price, coin.price),
          totalAnount: item.amount * coin.price,
          totalProfit: item.amount * coin.price - item.amount * item.price,
          id: item.id,
          amount: item.amount,
          price: item.price,
          date: new Date(),
        };
      }));
      setCrypto(result);
      setLoading(false);
    }
    prelode();
  }, []);

  if(loading) {
    return <Spin fullscreen />;
  }
  return (
    <Layout.Sider width='25%' style={siderStyle}>
      {assets.map((asset: CardAssetType) => (
        <Card key={asset.id} style={{marginBottom: '1rem'}}>
          <Statistic
            title={asset.id}
            value={asset.totalAnount}
            precision={2}
            valueStyle={{ color: asset.grow ? '#3f8600' : '#cf1322' }}
            prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            suffix='$'
          />
          <List
            size='small'
            bordered
            dataSource={[
              { title: 'Total Profit', value: asset.totalProfit },
              { title: 'Asset Amount', value: asset.amount, isPlant: true },
              { title: 'Difference', value: asset.growPrecent },
            ]}
            renderItem={(item) => (
              <List.Item>
                <span>{item.title}</span>
                {item.isPlant && <span>{Number(item.value)}</span>}
                {!item.isPlant && <Typography.Text type={asset.grow ? 'success' : 'danger'}>{Number(item.value).toFixed(2)}</Typography.Text>}
              </List.Item>
            )}
          />
        </Card>
      ))}
    </Layout.Sider>
  );
};