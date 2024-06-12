import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';

const buttonStyles = cva(
    'relative flex items-center gap-2 justify-center rounded-md border px-5 py-2 text-sm font-semibold shadow-[0_10px_20px_-10px] outline-none transition duration-300 hover:shadow-none',
    {
        variants: {
            fill: {
                primary: 'border-primary bg-primary text-white shadow-primary/60',
                secondary: 'border-secondary bg-secondary text-white shadow-secondary/60',
                success: "border-success bg-success text-white shadow-success/60",
                danger: "border-danger bg-danger text-white shadow-danger/60",
                warning: "border-warning bg-warning text-white shadow-warning/60",
                info: "border-info bg-info text-white shadow-info/60",
                dark: "border-dark bg-dark text-white shadow-dark/60",
            },
            outline: {
                primary: "border-primary text-primary shadow-none hover:bg-primary hover:text-white",
                secondary: "border-secondary text-secondary shadow-none hover:bg-secondary hover:text-white",
                success: "border-success text-success shadow-none hover:bg-success hover:text-white",
                danger: "border-danger text-danger shadow-none hover:bg-danger hover:text-white",
                warning: "border-warning text-warning shadow-none hover:bg-warning hover:text-white",
                info: "border-info text-info shadow-none hover:bg-info hover:text-white",
                dark: "border-dark text-dark shadow-none hover:bg-dark hover:text-white"
            },
            size: {
                small: 'px-2.5 py-1.5 text-xs',
                large: 'px-7 py-2.5 text-base',
            },
        },
        defaultVariants: {
            // outline: 'primary',
        },
    }
);

interface ButtonProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof buttonStyles> {
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({ className, outline, fill, size, icon, iconPosition = 'left', children, ...props }) => {
    return (
        <button className={clsx(buttonStyles({ outline, fill, size }), className)} {...props}>
            {iconPosition === 'left' && icon && <span>{icon}</span>}
            {children}
            {iconPosition === 'right' && icon && <span>{icon}</span>}
        </button>
    );
};

export default Button;
