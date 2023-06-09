"use client";
import { FC } from "react";
import { useTheme } from "next-themes";

import { BsMoonFill } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi";

const ThemeToggle: FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="transition-transition cursor-pointer"
    >
      {theme === "dark" ? (
        <HiOutlineSun className="text-3xl text-title" />
      ) : (
        <BsMoonFill className="text-xl" />
      )}
    </div>
  );
};

export default ThemeToggle;
