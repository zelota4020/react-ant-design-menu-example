import { useState } from "react";
import { Layout, Button, theme } from "antd";
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Content } from "antd/es/layout/layout";

const { Header, Sider } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigation = new Map<string, string>([
    ["home", "/"],
    ["activity", "/activity"],
    ["progress", "/progress"],
    ["payment", "/payment"],
    ["setting", "/setting"],
  ]);

  const navigate = useNavigate();

  const handleMenuitemClick = (key: string) => {
    console.log(navigation.get(key));
    navigate(navigation.get(key) as string);
  };

  // https://www.w3schools.com/react/react_router.asp

  // https://stackoverflow.com/questions/74338651/how-to-add-react-routing-to-antd-horizontal-menu

  return (
    <Layout>
      <Sider
        className="sidebar"
        theme={darkTheme ? "dark" : "light"}
        collapsed={collapsed}
        trigger={null}
        collapsible
      >
        <Logo />
        <MenuList
          darkTheme={darkTheme}
          handleMenitemClick={handleMenuitemClick}
        />
        <ToggleThemeButton
          darkTheme={darkTheme}
          toggleTheme={() => setDarkTheme(!darkTheme)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            className="toggle"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Header>
        <Content />
      </Layout>
    </Layout>
  );
}

export default App;
