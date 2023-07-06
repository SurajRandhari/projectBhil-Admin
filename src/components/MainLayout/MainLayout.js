// import "./MainLayout.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
     
        <div className="logo1">
          <img src="images/logo.png" className="imgg" alt="" width={80} />
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo"></span>
            <div className="lg-logo">
              <img src="images/sidebar/White .png" alt="" width={80} />
              VAINAVIN
            </div>
          </h2>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
              /* empty */
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: (
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3v10Z"
                  />
                </svg>
              ),
              label: "Dashboard",
            },
            {
              key: "banner",
              icon: (
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 21H2V3h2v16h2v-9h4v9h2V6h4v13h2v-5h4v7Z"
                  />
                </svg>
              ),
              label: "Banner",
            },
            {
              key: "blog",
              icon: (
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.2 11.2c1.77 0 3.2 1.43 3.2 3.2c0 1.77-1.43 3.2-3.2 3.2c-1.77 0-3.2-1.43-3.2-3.2c0-1.77 1.43-3.2 3.2-3.2m7.6 4.8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m.4-12A4.8 4.8 0 0 1 20 8.8c0 2.65-2.15 4.8-4.8 4.8a4.8 4.8 0 0 1-4.8-4.8c0-2.65 2.15-4.8 4.8-4.8Z"
                  />
                </svg>
              ),
              label: "Blog",
            },
            {
              key: "faq",
              icon: (
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.2 11.2c1.77 0 3.2 1.43 3.2 3.2c0 1.77-1.43 3.2-3.2 3.2c-1.77 0-3.2-1.43-3.2-3.2c0-1.77 1.43-3.2 3.2-3.2m7.6 4.8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m.4-12A4.8 4.8 0 0 1 20 8.8c0 2.65-2.15 4.8-4.8 4.8a4.8 4.8 0 0 1-4.8-4.8c0-2.65 2.15-4.8 4.8-4.8Z"
                  />
                </svg>
              ),
              label: "FAQ",
            },
            {
              key: "notification",
              icon: (
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6l2 2m-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10v-7Z"
                  />
                </svg>
              ),
              label: "Notification",
            },
            {
              key: "footer",
              icon: (
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.2 11.2c1.77 0 3.2 1.43 3.2 3.2c0 1.77-1.43 3.2-3.2 3.2c-1.77 0-3.2-1.43-3.2-3.2c0-1.77 1.43-3.2 3.2-3.2m7.6 4.8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m.4-12A4.8 4.8 0 0 1 20 8.8c0 2.65-2.15 4.8-4.8 4.8a4.8 4.8 0 0 1-4.8-4.8c0-2.65 2.15-4.8 4.8-4.8Z"
                  />
                </svg>
              ),
              label: "Footer",
            },
            {
              key: "pages",
              icon: (
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2m15 7H6V7h12m0 6H6v-2h12m0 6H6v-2h12v2Z"
                  />
                </svg>
              ),
              label: "Pages",
              children: [
                {
                  key: "home",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14 10h5.5L14 4.5V10M5 3h10l6 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2m0 2v14h14v-7h-7V5H5Z"
                      />
                    </svg>
                  ),
                  label: "Home",
                },
                {
                  key: "about",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14 10h5.5L14 4.5V10M5 3h10l6 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2m0 2v14h14v-7h-7V5H5Z"
                      />
                    </svg>
                  ),
                  label: "About-us",
                },
                {
                  key: "services",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14 10h5.5L14 4.5V10M5 3h10l6 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2m0 9v2h14v-2H5m0 4v2h9v-2H5Z"
                      />
                    </svg>
                  ),
                  label: "Services",
                },
                {
                  key: "contact-us",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14 10h5.5L14 4.5V10M5 3h10l6 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2m0 9v2h14v-2H5m0 4v2h9v-2H5Z"
                      />
                    </svg>
                  ),
                  label: "Contact-Us",
                },
                {
                  key: "testimonial",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14 10h5.5L14 4.5V10M5 3h10l6 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2m0 9v2h14v-2H5m0 4v2h9v-2H5Z"
                      />
                    </svg>
                  ),
                  label: "Testimonial",
                },
                {
                  key: "term",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14 10h5.5L14 4.5V10M5 3h10l6 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2m0 9v2h14v-2H5m0 4v2h9v-2H5Z"
                      />
                    </svg>
                  ),
                  label: "Term and Condition",
                },
                {
                  key: "privacy",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14 10h5.5L14 4.5V10M5 3h10l6 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2m0 9v2h14v-2H5m0 4v2h9v-2H5Z"
                      />
                    </svg>
                  ),
                  label: "Privacy Policy",
                },
              ],
            },

            {
              key: "setting",
              icon: (
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4Z"
                  />
                </svg>
              ),
              label: "Setting",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-5 bg-black"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              Size: "24px",
              width: 64,
              height: 64,
              color: "#fff",
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div>
              <img
                width={32}
                height={32}
                src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                alt=""
              />
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
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
