import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const modalStyles = cva(
  "relative top-[50%] left-[50%] translate-x-[-50%] border border-gray-200 p-4 rounded rounded-md overflow-auto shadow-md z-50",
  {
    variants: {
      transition: {
        true: "transition-opacity duration-500 ease-in-out",
      },
      sizes: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        full: "w-full",
      },
      placement: {
        top: "items-start",
        center: "items-center",
        bottom: "items-end",
      },
    },
    defaultVariants: {
      transition: true,
      sizes: "sm",
      placement: "center",
    },
  }
);

interface ModalProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof modalStyles> {
  modalOpen: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  className,
  modalOpen,
  placement,
  sizes,
  transition,
  ...props
}) => {
  const classes = modalStyles({ placement, sizes, transition });

  if (!modalOpen) return null;

  return <div className={clsx(classes, className)} {...props} />;
};
