import React from 'react';
import { Button, DatePicker } from 'antd';

export const BtnLayout = () => {
  return (
    <div>
      <DatePicker />
      <Button type='primary' className='ml-2'>
        Primary Button
      </Button>
    </div>
  );
};
