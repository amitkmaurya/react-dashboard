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
            onClick={({ key }) => {
              if (key === "signout") {

              } else {
                navigate(key);
              }
            }}
            items={[
              {
                key: '',
                icon: <AiOutlineDashboard className='fs-4' />,
                label: 'Dashboard',
                children: [
                  {
                    key: '',
                    icon: <AiOutlineUser className='fs-4' />,
                    label: 'My Dashboard'
                  },
                  {
                    key: 'change-password',
                    icon: <AiOutlineUser className='fs-4' />,
                    label: 'Change Password'
                  }
                ]
              },
              {
                key: 'super-distributors',
                icon: <AiOutlineShoppingCart className='fs-4' />,
                label: 'Super Distributors',
                children: [
                  {
                    key: 'create-super-distributors',
                    icon: <AiOutlineShoppingCart />,
                    label: 'Create Supper Distributors',
                  },
                  {
                    key: 'view-super-distributor',
                    icon: <AiOutlineShoppingCart />,
                    label: 'View Super Distributors',
                  },
                ]
              },
              {
                key: 'distributors',
                icon: <AiOutlineUser className='fs-4' />,
                label: 'Distributors',
                children: [
                  {
                    key: 'create-distributors',
                    icon: <AiOutlineUser className='fs-4' />,
                    label: 'Create Distributor', 
                  },
                  {
                    key: 'view-distributors',
                    icon: <AiOutlineUser className='fs-4' />,
                    label: 'View Distributors', 
                  },
                ]
              },
              {
                key: 'retailers',
                icon: <AiOutlineShoppingCart className='fs-4' />,
                label: 'Retailer',
                children: [
                  {
                    key: 'create-retailers',
                    icon: <AiOutlineShoppingCart />,
                    label: 'Create Retailers',
                  },
                  {
                    key: 'view-retailers',
                    icon: <AiOutlineShoppingCart />,
                    label: 'View Reatilers',
                  },
                  {
                    key: 'onboard-retailers',
                    icon: <AiOutlineShoppingCart />,
                    label: 'Onboard Reatilers',
                  },
                ]
              },
              {
                key: 'reports',
                icon: <AiOutlineShoppingCart className='fs-4' />,
                label: 'Reports',
                children: [
                  {
                    key: 'ledger-report',
                    icon: <AiOutlineShoppingCart />,
                    label: 'Ledger Report',
                  },
                  {
                    key: 'GST-Report',
                    icon: <AiOutlineShoppingCart />,
                    label: 'GST Report',
                  },
                ]
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header 
          className='d-flex justify-content-between ps-2 pe-5'
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <div className="d-flex gap-3 align-items-center">
              <div className="d-flex">
                <img
                width={32}
                height={32}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4sV-EIOOGwZH_r5FmHfGrKYpVusf1ZO-tiYNyw3JoMw&usqp=CAU&ec=48600113" alt="user" />
              </div>
              <div className="d-flex flex-column">
              <h5 className='mb-0'>User Name</h5>
              <p className='mb-0'>example@gmail.com</p>
              </div>
            </div>
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