import * as React from "react";

interface ButtonProps {
  children?: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="rounded-md bg-pink-500 p-2 font-bold">
      {children ? children : "Hello from UI"}
    </button>
  );
};
