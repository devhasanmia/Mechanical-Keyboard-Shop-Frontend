import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { Layout, Menu } from 'antd';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";


const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: 'Add Product',
    icon: <MdOutlineProductionQuantityLimits />,
    title: 'Add Product',
    to: '/dashboard/add-product',
  },
  {
    key: 'Orders',
    icon: <MdDashboard />,
    title: 'Orders',
    to: '/dashboard/orders',
  },
  {
    key: 'Users',
    icon: <FaUserTie />,
    title: 'Users',
    to: '/dashboard/users', 
  },
];

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="text-center font-semibold text-white">
          <div className="text-center ">
            <Link to="/dashboard">
              <h1 className="mt-4 mb-4 text-2xl">Dashboard</h1>
            </Link>
          </div>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {items.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.to}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>

          2024 - {new Date().getFullYear()} Mechanical Keyboard Shop. All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
