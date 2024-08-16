import React from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  // backgroundColor: '#1677ff',
};
// TODO
export const Sidebar: React.FC = () => (<Sider breakpoint="lg" width="25%" style={siderStyle}>
  Sider
</Sider>);

