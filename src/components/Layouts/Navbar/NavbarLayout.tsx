import React from 'react';
import Link from 'next/link';
import { Layout, Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Header } = Layout;

export const NavbarLayout = () => {
  const regionMenu = (
    <Menu>
      <Menu.Item key='1'>English</Menu.Item>
      <Menu.Item key='2'>Thailand</Menu.Item>
    </Menu>
  );

  return (
    <Header className='bg-pan-gray-1'>
      <div className='justify-between'>
        <div>
          <Link href='/'>
            <img
              src='/pandora-logo.svg'
              alt='pandora'
              className='inline-flex items-center w-36'
            />
          </Link>
        </div>
        <div>
          <Button type='primary'>Login / Register</Button>
          <Dropdown overlay={regionMenu}>
            <Button className='text-white bg-pan-gray-2'>
              English <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
    </Header>
    // <div className='container bg-pan-gray-1'>
    //   <Row>
    //     <Col>
    // <Link href='/'>
    //   <img
    //     src='/pandora-logo.svg'
    //     alt='pandora'
    //     className='inline-flex items-center w-20 h-20'
    //   />
    // </Link>
    //     </Col>
    //     <Col>
    //       <div className='flex items-center justify-end'>
    //         <Button type='primary'></Button>
    //       </div>
    //     </Col>
    //   </Row>
    // </div>
  );
};

{
  /* <Link href='/'>
  <img
    src='/pandora-logo.svg'
    alt='pandora'
    className='inline-flex items-center w-20 h-20'
  />
</Link>; */
}
