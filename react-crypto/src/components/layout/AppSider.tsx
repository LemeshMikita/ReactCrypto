import React, { useContext } from 'react';
import { Layout, Card, Statistic, List, Typography, Spin, Tag } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { capitalize } from '../../utils';
import { CryptoContext } from '../../context/crypto-context';

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
  const { loading, assets }: any = useContext(CryptoContext);
  if(loading) {
    return <Spin fullscreen />;
  }
  return (
    <Layout.Sider width='25%' style={siderStyle}>
      {assets.map((asset: CardAssetType) => (
        <Card key={asset.id} style={{marginBottom: '1rem'}}>
          <Statistic
            title={capitalize(asset.id)}
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
              { title: 'Total Profit', value: asset.totalProfit, withTag: true },
              { title: 'Asset Amount', value: asset.amount, isPlant: true },
              { title: 'Difference', value: asset.growPrecent },
            ]}
            renderItem={(item) => (
              <List.Item>
                <span>{item.title}</span>
                <span>
                  {item.withTag && <Tag color={asset.grow ? 'green' : 'red'}>{asset.growPrecent.toString()}%</Tag>}
                  {item.isPlant && Number(item.value)}
                  {!item.isPlant && <Typography.Text type={asset.grow ? 'success' : 'danger'}>{Number(item.value).toFixed(2)}$</Typography.Text>}
                </span>
              </List.Item>
            )}
          />
        </Card>
      ))}
    </Layout.Sider>
  );
};