"use client";
import { FC, useState, useEffect } from "react";
import Link from "next/link";

import ThemeToggle from "./elements/ThemeToggle";
import Container from "./elements/Container";

const Navbar: FC = () => {
  const [small, setSmall] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("scroll", () => {
        setSmall(window.pageYOffset > 200);
      });
    }
  }, []);
  return (
    <header
      className={`py-4 md:py-6 fixed top-0 inset-x-0 z-50 ${
        small ? "bg-title  dark:bg-bgAlt" : ""
      } transition-transition`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center border-2 hover:border-accent rounded-lg">
            <Link
              href="/"
              className="text-2xl font-bold px-2 hover:text-accent transition-transition"
            >
              NH
            </Link>
          </div>
          <nav>
            <div className="flex items-center justify-between gap-4">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
