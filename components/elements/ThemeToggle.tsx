"use client";
import { FC } from "react";
import { useTheme } from "next-themes";

import { BsMoonFill } from "react-icons/bs";
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
        <BsMoonFill className="text-2xl" />
      )}
    </li>
  );
};

export default ThemeToggle;
