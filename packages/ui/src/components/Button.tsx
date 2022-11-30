import * as React from "react";

interface ButtonProps {
  children?: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="btn btn-primary">
      {children ? children : "Hello from UI"}
    </button>
  );
};
