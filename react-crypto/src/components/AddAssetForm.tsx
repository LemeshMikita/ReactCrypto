import { useState } from 'react';
import { Select, Space, Typography, Flex, Divider, Form, DatePicker, Button, InputNumber, Result } from 'antd';
import { useCrypto } from '../context/crypto-context';

const validateMessages = {
  require: '${label} is required',
  types: {
    number: '${label} is not valid number',
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
};

export const AddAssetForm = ({ onClose }: any) => {
  const [form] = Form.useForm();
  const { crypto }: any = useCrypto();
  const [submitted, setSubmitted] = useState(false);
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
  const onFinish = () => {
    setSubmitted(true);
  };

  if(submitted) {
    return (
      <Result
        status='success'
        title='New Asset Added'
        subTitle={`Added ${42} of ${coin.name} by price ${24}`}
        extra={[
          <Button type='primary' key='console' onClick={onClose}>
        Go Console
          </Button>,
          <Button key='buy'>Buy Again</Button>,
        ]}
      />
    );
  }

  const handleAmount = (value: any) => {
    form.setFieldsValue({
      total: (value * coin.price).toFixed(2)
    });
  };
  
  return (
    <Form
      form={form}
      name='basic'
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      style={{ maxWidth: 600 }}
      initialValues={{
        price: coin.price.toFixed(2)
      }}
      onFinish={onFinish}
      validateMessages={validateMessages}
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
          }
        ]}
      >
        <InputNumber 
          style={{width: '100%'}}
          onChange={handleAmount}
        />
      </Form.Item>

      <Form.Item label='Price' name='price'>
        <InputNumber style={{width: '100%'}} disabled/>
      </Form.Item>

      <Form.Item label='Date & Time' name='date'>
        <DatePicker showTime/>
      </Form.Item>

      <Form.Item label='Total' name='total'>
        <InputNumber style={{width: '100%'}} disabled/>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
        Add Asset
        </Button>
      </Form.Item>
    </Form>
  );
};