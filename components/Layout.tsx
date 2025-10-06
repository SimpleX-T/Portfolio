"use client";

import { useState } from "react";
import Aside from "./sidebar-menu";
import ToggleIcon from "./toggle-icon";
import StyleSwitcher from "./style-switcher";
import { useTheme } from "@/contexts/theme";
import ParticleField from "@/components/particle-field";
import DisplayCard from "./display-card";

function Layout({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = useState(false);
  const { theme, skinColor } = useTheme();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <main
      className={`layout ${theme} relative`}
      style={{ ["--skin-color" as string]: skinColor }}
    >
      <ParticleField
        className="z-10"
        particleColor="var(--skin-color)"
        opacity={0.3}
        particleCount={30}
        connectDistance={120}
      />

      {/* toggle button */}
      {/* <ToggleIcon toggle={toggle} handleToggle={handleToggle} /> */}
      {/* sidebar */}
      {/* <div
        className={`overlay w-full h-full hidden md:block backdrop-blur-[14px] z-50 fixed transform transition-transform duration-200 ease-in-out ${
          toggle ? "translate-y-[0%]" : "-translate-y-[100%]"
        }`}
        onClick={() => setToggle(false)}
      ></div> */}
      {/* <Aside toggle={toggle} setToggle={setToggle} /> */}
      {/* main */}

      <DisplayCard className="w-full min-h-screen">
        <StyleSwitcher />
        {children}
      </DisplayCard>
    </main>
  );
}
export default Layout;
