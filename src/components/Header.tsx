import React from "react";

interface HeaderProps {
  appLabel: string;
  buttonLabel: string;
}

const Header = ({ appLabel, buttonLabel }: HeaderProps) => {
  return (
    <div className="flex flex-row mx-20 my-5 items-center justify-between border-b-2">
      <h1 className="text-3xl font-bold font-mono cursor-pointer">
        {appLabel}
      </h1>
    </div>
  );
};

export default Header;
