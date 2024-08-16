import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
};

// TODO
export const HeaderLayout: React.FC = () => (<Header style={headerStyle}>Header</Header>);

