import { useEffect, useState } from 'react';
import { Card, Row, Col, Statistic, Typography } from 'antd';
import { UserOutlined, ClockCircleOutlined, CalendarOutlined, TeamOutlined } from '@ant-design/icons';
import MainLayout from '../layouts/MainLayout';

const { Title } = Typography;

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <MainLayout>
      <div className="site-card-wrapper">
        <Title level={2}>Dashboard</Title>
        
        <Row gutter={16}>
          <Col span={6}>
            <Card loading={loading}>
              <Statistic 
                title="Total Employees" 
                value={48} 
                prefix={<UserOutlined />} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card loading={loading}>
              <Statistic 
                title="Present Today" 
                value={42} 
                prefix={<ClockCircleOutlined />} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card loading={loading}>
              <Statistic 
                title="On Leave" 
                value={6} 
                prefix={<CalendarOutlined />} 
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card loading={loading}>
              <Statistic 
                title="Departments" 
                value={5} 
                prefix={<TeamOutlined />} 
              />
            </Card>
          </Col>
        </Row>
        
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card title="Recent Activities" loading={loading}>
              <p>Employee onboarding: John Doe (Developer)</p>
              <p>Leave approved: Jane Smith (3 days)</p>
              <p>Attendance correction: Mike Johnson</p>
              <p>Department created: Marketing</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Upcoming Events" loading={loading}>
              <p>Team Meeting - March 15, 2025</p>
              <p>Quarterly Review - March 30, 2025</p>
              <p>Company Holiday - April 1, 2025</p>
              <p>Performance Evaluations - April 15, 2025</p>
            </Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
}