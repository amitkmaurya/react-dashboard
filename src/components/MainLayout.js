import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
  import { AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
  import { Layout, Menu, theme } from 'antd';
  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { Outlet } from 'react-router-dom';
  const { Header, Sider, Content } = Layout;
  const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" >
            <h2 className='text-white fs-5 text-center py-3 mb-0'>
              <span className='sm-logo'>AB</span>
              <span className='lg-logo'>AnyBrand</span>
            </h2>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['']}
            onClick={({key}) => {
              if (key == "signout") {

              } else {
                navigate(key);
              }
            }}
            items={[
              {
                key: '',
                icon: <AiOutlineDashboard className='fs-4' />,
                label: 'Dashboard',
              },
              {
                key: 'customers',
                icon: <AiOutlineUser className='fs-4' />,
                label: 'Customers',
              },
              {
                key: 'Catalog',
                icon: <AiOutlineShoppingCart className='fs-4' />,
                label: 'Catalog',
                children: [
                  {
                    key: 'Product',
                    icon: <AiOutlineShoppingCart />,
                    label: 'Add Product',
                  },
                  {
                    key: 'product-list',
                    icon: <AiOutlineShoppingCart />,
                    label: 'Product List',
                  },
                ]
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
           
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default MainLayout;