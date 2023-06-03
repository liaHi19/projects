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
        small ? "bg-title  dark:bg-container" : ""
      } transition-transition`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold italic hover:text-primary transition-transition"
          >
            NH
          </Link>
          <nav>
            <ul className="flex items-center justify-between gap-4">
              <ThemeToggle />
              <li>
                <Link
                  href="/#projects"
                  className="hover:text-primary text-xl transition-transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-primary text-xl transition-transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
