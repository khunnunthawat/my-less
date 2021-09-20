import { Layout, Menu, Breadcrumb } from 'antd';
import { Typography } from 'antd';
import { FormLogin } from '@/components/FormLogin';

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
              <TextMenuHead title='PANOORA ELLEVEN' />
            </Menu.Item>
            <Menu.Item key='2'>
              <TextMenuHead title='Home' />
            </Menu.Item>
            <Menu.Item key='3'>
              <TextMenuHead title='Sport' />
            </Menu.Item>
            <Menu.Item key='4'>
              <TextMenuHead title='E-Sport' />
            </Menu.Item>
            <Menu.Item key='5'>
              <TextMenuHead title='Live' />
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>
                <TextMenuHead title='Home' />
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
              <FormLogin />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export const TextMenuHead: React.FC<any> = ({ title }) => {
  return <Text className='text-base font-bebas'>{title}</Text>;
};
