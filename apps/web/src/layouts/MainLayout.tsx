import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  TeamOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  SettingOutlined,
  HomeOutlined,
  BankOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Header, Sider, Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" style={{ height: 32, margin: 16, color: 'white', textAlign: 'center', fontSize: 18 }}>
          {collapsed ? 'ERP' : 'ERP System'}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/']}
          selectedKeys={[router.pathname]}
          items={[
            {
              key: '/',
              icon: <HomeOutlined />,
              label: <Link href="/">Dashboard</Link>,
            },
            {
              key: '/employees',
              icon: <UserOutlined />,
              label: <Link href="/employees">Employees</Link>,
            },
            {
              key: '/departments',
              icon: <TeamOutlined />,
              label: <Link href="/departments">Departments</Link>,
            },
            {
              key: '/attendance',
              icon: <ClockCircleOutlined />,
              label: <Link href="/attendance">Attendance</Link>,
            },
            {
              key: '/leave',
              icon: <CalendarOutlined />,
              label: <Link href="/leave">Leave Management</Link>,
            },
            {
              key: '/payroll',
              icon: <BankOutlined />,
              label: <Link href="/payroll">Payroll</Link>,
            },
            {
              key: '/reports',
              icon: <BarChartOutlined />,
              label: <Link href="/reports">Reports</Link>,
            },
            {
              key: '/settings',
              icon: <SettingOutlined />,
              label: <Link href="/settings">Settings</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;