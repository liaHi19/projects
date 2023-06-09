import { FC } from "react";

interface LinkIconProps {
  Icon: React.ElementType;
  link: string;
}

const LinkIcon: FC<LinkIconProps> = ({ link, Icon }) => {
  return (
    <li>
      <a href={link} target="_blank">
        <Icon className="text-lg md:text-2xl hover:text-accent dark:hover:text-primary transition-transition" />
      </a>
    </li>
  );
};

export default LinkIcon;
