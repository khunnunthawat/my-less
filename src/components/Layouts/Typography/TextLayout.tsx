import { Typography } from 'antd';

const { Text } = Typography;
const menuFont: Partial<string> = 'text-base font-normal font-bebas';

interface TextProps {
  title: string;
}

export const TitleMenuText: React.FC<TextProps> = ({ title }) => {
  return <Text className={`${menuFont} text`}>{title}</Text>;
};
