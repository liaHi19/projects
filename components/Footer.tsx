import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center py-6 bg-title dark:bg-bgAlt">
      <p className="medium text-sm">
        {" "}
        &copy; made by{" "}
        <a
          href="mailto:gn.natalia19@gmail.com"
          className="text-primary italic transition-transition hover:border-b-2 hover:border-primary"
        >
          Natalia Hirniak
        </a>{" "}
        {year}
      </p>
    </footer>
  );
};

export default Footer;
