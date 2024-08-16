import React from 'react';
import { Layout } from 'antd';
import {HeaderLayout} from "@common/layouts/main/HeaderLayout/HeaderLayout";
import {Sidebar} from "@common/layouts/main/Sidebar/Sidebar";

const { Content } = Layout;


const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  padding: 20,
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
};

const MainLayout = ({children}:{ children: React.ReactNode }) => (
  <Layout style={layoutStyle}>
    <HeaderLayout />
    <Layout>
      <Sidebar />
      <Content style={contentStyle}>{children}</Content>
    </Layout>
  </Layout>
);

export default MainLayout;