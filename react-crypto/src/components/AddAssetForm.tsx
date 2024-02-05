import { useState } from 'react';
import { Select, Space, Typography, Flex, Divider, Form, Input, Checkbox, Button, InputNumber } from 'antd';
import { useCrypto } from '../context/crypto-context';

export const AddAssetForm = () => {
  const { crypto }: any = useCrypto();
  const [coin, setCoin]: any = useState(null);

  if(!coin) {
    return (
      <Select 

        style={{ width: '100%' }}
  
        onSelect={(v) => setCoin(crypto.find((c: any) => c.id === v))}
        optionLabelProp='Select Coin'
        options={crypto.map((coin: any) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon
        }))}
        optionRender={(option) => (
          <Space>
            <img style={{width: 20}} src={option.data.icon} alt={option.data.label} /> {option.data.label}
          </Space>
        )}/>
    );
  }
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  return (
    <Form
      name='basic'
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      style={{ maxWidth: 600 }}
      initialValues={{}}
      onFinish={onFinish}
    >
      <Flex align='center'>
        <img src={coin.icon} alt='coin' style={{width: 40, marginRight: 10}} />
        <Typography.Title level={2} style={{margin: 0}}>
          {coin.name}
        </Typography.Title>
      </Flex>
      <Divider />
      <Form.Item
        label='Amount'
        name='amount'
        rules={[
          {
            required: true,
            type: 'number',
            min: 0,
            message: 'Please input your password!' 
          }
        ]}
      >
        <InputNumber style={{width: '100%'}}/>
      </Form.Item>

      <Form.Item label='Price' name='price'>
        <InputNumber style={{width: '100%'}}/>
      </Form.Item>

      <Form.Item label='Total' name='total'>
        <InputNumber style={{width: '100%'}}/>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
        Add Asset
        </Button>
      </Form.Item>
    </Form>
  );
};