import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

export default function AdminLayout() {
    const navigate = useNavigate();
    const Click = (e) => {
        if(e.key === 'F'){
            navigate('/admin/Film');
        }else if(e.key === '2'){
            navigate('/admin/showTime');
        }else if(e.key === 'sub1'){
            navigate('/admin/user');
        }

    }
    const items = [
        getItem('User', 'sub1', <UserOutlined />),
        getItem('Files', '9', <FileOutlined />, [
            getItem('Film', 'F'),
        ]),
        getItem('Show Time', '2', <DesktopOutlined />),
    
    ];
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo">
                    <img className='w-100 p-2' src="https://pngimg.com/uploads/mma/mma_PNG14.png" alt="" />
                </div>
                <Menu theme="dark" onClick={Click} mode="inline" items={items} />
                <button onClick={() => navigate('/admin/login')}>Login</button>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Design ©2022 Created by Ho Long Dai
                </Footer>
            </Layout>
        </Layout>
    );
}
