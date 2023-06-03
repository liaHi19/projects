"use client";
import { FC } from "react";
import { Puff } from "react-loader-spinner";

const Spinner: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        visible={true}
      />
    </div>
  );
};

export default Spinner;
