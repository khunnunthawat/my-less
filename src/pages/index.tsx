import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { Typography } from 'antd';
import { TitleMenuText } from '../components/Layouts/Typography/TextLayout';

require('./index.less');

const { Header, Content } = Layout;
const { Text } = Typography;

export default function Home() {
  return (
    <div className='items-center justify-center min-h-screen'>
      <Layout>
        <Header className='header'>
          <Menu theme='light' mode='horizontal' defaultSelectedKeys={['2']}>
            <Menu.Item key='1'>
              <TitleMenuText title='ABCDEFG' />
            </Menu.Item>
            <Menu.Item key='2'>
              <TitleMenuText title='Home' />
            </Menu.Item>
            <Menu.Item key='3'>
              <TitleMenuText title='Sport' />
            </Menu.Item>
            <Menu.Item key='4'>
              <TitleMenuText title='E-Sport' />
            </Menu.Item>
            <Menu.Item key='5'>
              <TitleMenuText title='Live' />
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>
                <TitleMenuText title='Home' />
              </Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
              <Button type='primary' size='large'>
                Button
              </Button>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
