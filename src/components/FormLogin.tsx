import React from 'react';
import { Form, Input, Button, Checkbox, Pagination } from 'antd';
import { TextMenuHead } from '../pages/index';

export const FormLogin = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label={<span className='my-4 text-lg font-bebas'>Username</span>}
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={<span className='my-4 text-lg font-bebas'>Password</span>}
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='remember'
        valuePropName='checked'
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>
          <TextMenuHead title='Remember me' />
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          <span className='text-white font-bebas'>Submit</span>
        </Button>
      </Form.Item>
      <Pagination defaultCurrent={1} total={50} />
    </Form>
  );
};
