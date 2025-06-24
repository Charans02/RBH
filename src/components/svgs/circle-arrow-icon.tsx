import React from "react";

interface CircleArrowIconProps {
  className?: string;
}

const CircleArrowIcon: React.FC<CircleArrowIconProps> = ({ className }) => {
  return (
    <svg
      className={
        className ||
        "h-[16px] w-[16px] md:h-[16.53px] md:w-[16.53px] xl:h-[29.86px] xl:w-[29.86px]"
      }
      viewBox="0 0 25 24"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.165 22C17.6879 22 22.165 17.5228 22.165 12C22.165 6.47715 17.6879 2 12.165 2C6.64219 2 2.16504 6.47715 2.16504 12C2.16504 17.5228 6.64219 22 12.165 22Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M10.665 8C10.665 8 13.665 10.946 13.665 12C13.665 13.0541 10.665 16 10.665 16"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CircleArrowIcon;
