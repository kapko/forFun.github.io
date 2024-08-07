import React, { PropsWithChildren } from "react";
import { Card, Flex, Typography } from "antd";
import './authWrapper.styles.scss';
const { Title } = Typography;

interface AuthWrapperProps {
  title: string;
}

const AuthWrapper: React.FC<PropsWithChildren<AuthWrapperProps>> = ({ title, children}) => {
  return (
    <Flex justify='center' align='center' className='auth'>
      <Card className='card'>
        <Title style={{ textAlign: 'center' }} level={2}>{title}</Title>
        {children}
      </Card>
    </Flex>
  );
};

export default AuthWrapper;
