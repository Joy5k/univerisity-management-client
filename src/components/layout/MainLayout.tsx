import { Layout } from "antd";
const { Header, Content } = Layout;
import {} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
 
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sidebar></Sidebar>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet></Outlet>
            </div>
          </Content>
  
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
