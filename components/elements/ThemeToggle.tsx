"use client";
import { FC } from "react";
import { useTheme } from "next-themes";

import { RiMoonClearFill } from "react-icons/ri";
import { CiSun } from "react-icons/ci";

const ThemeToggle: FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <li
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="transition-transition cursor-pointer"
    >
      {theme === "dark" ? (
        <CiSun className="text-2xl text-title" />
      ) : (
        <RiMoonClearFill className="text-2xl" />
      )}
    </li>
  );
};

export default ThemeToggle;
