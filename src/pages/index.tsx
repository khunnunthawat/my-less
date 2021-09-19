import { Layout, Menu, Breadcrumb } from 'antd';
import { FormLogin } from '@/components/FormLogin';
import { UserOutlined } from '@ant-design/icons';

require('./index.less');

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function Home() {
  return (
    <div className='items-center justify-center min-h-screen'>
      <Layout>
        <Header className='header'>
          <Menu theme='light' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>nav 1</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200}>
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key='sub1' icon={<UserOutlined />} title='subnav 1'>
                <Menu.Item key='1'>option1</Menu.Item>
                <Menu.Item key='2'>option2</Menu.Item>
                <Menu.Item key='3'>option3</Menu.Item>
                <Menu.Item key='4'>option4</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <FormLogin />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
