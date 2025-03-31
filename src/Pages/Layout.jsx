import { Outlet } from "react-router-dom";
import { useState } from "react";

import "../CSS/main.css";
import Aside from "../UI/Aside";
import ToggleIcon from "../UI/ToggleIcon";
import StyleSwitcher from "../UI/StyleSwitcher";
import { useTheme } from "../Services/ThemeContext";
import ParticleField from "../animations/ParticleField";

function Layout() {
  const [toggle, setToggle] = useState(false);
  const { theme, skinColor } = useTheme();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`layout ${theme} relative`}
      style={{ "--skin-color": skinColor }}
    >
      <ParticleField
        className="z-10"
        particleColor="var(--skin-color)"
        opacity={0.3}
        particleCount={30}
        connectDistance={120}
      />
      {/* toggle button */}
      <ToggleIcon toggle={toggle} handleToggle={handleToggle} />
      {/* sidebar */}
      <div
        className={`overlay w-full h-full hidden md:block backdrop-blur-[14px] z-50 fixed transform transition-transform duration-200 ease-in-out ${
          toggle ? "translate-y-[0%]" : "-translate-y-[100%]"
        }`}
        onClick={() => setToggle(false)}
      ></div>
      <Aside toggle={toggle} setToggle={setToggle} />
      {/* main */}
      <main className="w-full h-[100vh]">
        <StyleSwitcher />
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
