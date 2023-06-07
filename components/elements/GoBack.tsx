"use client";
import { FC } from "react";

import { useRouter } from "next/navigation";
import { MdOutlineArrowBackIos } from "react-icons/md";

interface GoBackProps {}

const GoBack: FC<GoBackProps> = ({}) => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="p-2 border-2 border-border dark:border-bgAlt rounded-md transition-transition hover:border-primary flex items-center gap-2 dark:hover:border-primary font-medium hover:bg-primary"
      onClick={() => router.back()}
    >
      <MdOutlineArrowBackIos className="text-xl" />
      Go Back
    </button>
  );
};

export default GoBack;
