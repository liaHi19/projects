import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-screen-xl mx-auto px-4">{children}</div>;
};

export default Container;
