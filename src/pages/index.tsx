import { Typography } from 'antd';
import { BtnLayout } from '@/components/BtnLayout';

const { Title } = Typography;

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <main className='flex flex-col items-center justify-center flex-1 w-full px-20 text-center'>
        <Title level={2} className='text-6xl font-bold text-blue-500'>
          Next.js Antd Less
        </Title>
        <BtnLayout />
      </main>
    </div>
  );
}
