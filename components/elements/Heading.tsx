import { FC, ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

const Heading: FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <div className="flex items-center justify-center">
      <h2
        {...props}
        className="self-start text-bold text-3xl md:text-5xl mb-2 pb-3 relative after:absolute after:bottom-0 after:left-[10%] after:right-[-10%] after:w-[80%] after:h-[3px] after:bg-primary"
      >
        {children}
      </h2>
    </div>
  );
};

export default Heading;
