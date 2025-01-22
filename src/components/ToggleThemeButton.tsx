import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { Button } from "antd";

interface ToggleThemeButtonProps {
  darkTheme: boolean;
  toggleTheme: () => void;
}

function ToggleThemeButton({ darkTheme, toggleTheme }: ToggleThemeButtonProps) {
  return (
    <div className="toggle-theme-btn">
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineMoon /> : <HiOutlineSun />}
      </Button>
    </div>
  );
}

export default ToggleThemeButton;
