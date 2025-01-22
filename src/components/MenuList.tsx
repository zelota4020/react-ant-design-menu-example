import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
} from "@ant-design/icons";

interface MenuListProps {
  darkTheme: boolean;
  handleMenitemClick: (key: string) => void;
}

function MenuList({ darkTheme, handleMenitemClick }: MenuListProps) {
  return (
    <Menu
      onClick={(e) => handleMenitemClick(e.key)}
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="activity" icon={<AppstoreOutlined />}>
        Activity
      </Menu.Item>
      <Menu.SubMenu key="subtasks" icon={<BarsOutlined />} title="Subtasks">
        <Menu.Item key="subtask1">Subtask 1</Menu.Item>
        <Menu.Item key="subtask2">Subtask 2</Menu.Item>
        <Menu.SubMenu key="subtasks3" title="Subtasks 3">
          <Menu.Item key="subtask3-1">Subtask 31</Menu.Item>
          <Menu.Item key="subtask3-2">Subtask 32</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item key="progress" icon={<AreaChartOutlined />}>
        Progress
      </Menu.Item>
      <Menu.Item key="payment" icon={<PayCircleOutlined />}>
        Payment
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}>
        Setting
      </Menu.Item>
    </Menu>
  );
}

export default MenuList;
