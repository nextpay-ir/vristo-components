import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const typographyStyles = cva(
  'block',
  {
    variants: {
      size: {
        small: 'text-xs',
        medium: 'text-sm',
        large: 'text-lg',
      },
      weight: {
        normal: 'font-normal',
        semibold: "font-semibold",
        bold: 'font-bold',
      },
      color: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        success: 'text-success',
        danger: 'text-danger',
        black: "text-black"
      },
    },
    defaultVariants: {
      size: 'medium',
      weight: 'normal',
      color: 'black',
    },
  }
);

interface TypographyProps extends VariantProps<typeof typographyStyles> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ as: Tag = 'p', className, size, weight, color, children, ...props }) => {
  return (
    <Tag className={clsx(typographyStyles({ size, weight, color }), className)} {...props}>
      {children}
    </Tag>
  );
};