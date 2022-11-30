import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

const variants = cva(["btn"], {
  variants: {
    intent: { primary: "btn-primary", warning: "btn-warning" },
    size: { small: "btn-sm", medium: "btn-md" },
    loading: {
      true: "loading",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

export const Button = ({
  className,
  children,
  intent,
  size,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={variants({ class: className, intent, size, loading })}
      disabled={!!loading}
      {...props}
    >
      {children}
    </button>
  );
};
