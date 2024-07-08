import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';

const buttonStyles = cva(
    'relative flex items-center gap-2 justify-center rounded-md border px-5 py-2 text-sm shadow-[0_10px_20px_-10px] outline-none transition duration-300 hover:shadow-none dark:text-white-dark',
    {
        variants: {
            fill: {
                primary: 'border-primary bg-primary text-white shadow-primary/60 dark:bg-primary-dark-light dark:hover:shadow-primary-dark-light/20',
                secondary: 'border-secondary bg-secondary text-white shadow-secondary/60 dark:bg-secondary-dark-light dark:shadow-secondary-dark-light/20',
                success: "border-success bg-success text-white shadow-success/60 dark:bg-success-dark-light dark:shadow-success-dark-light/20",
                danger: "border-danger bg-danger text-white shadow-danger/60 dark:bg-danger-dark-light dark:shadow-danger-dark-light/20",
                warning: "border-warning bg-warning text-white shadow-warning/60 dark:bg-warning-dark-light dark:shadow-warning-dark-light/20",
                info: "border-info bg-info text-white shadow-info/60 dark:bg-info-dark-light dark:shadow-info-dark-light/20",
                dark: "border-dark bg-dark text-white shadow-dark/60 dark:bg-black-dark-light dark:shadow-black-dark-light/20",
            },
            outline: {
                primary: "border-primary text-primary shadow-none hover:bg-primary hover:text-white dark:border-primary-dark-light dark:hover:bg-primary-dark-light/20",
                secondary: "border-secondary text-secondary shadow-none hover:bg-secondary hover:text-white dark:border-secondary-dark-light dark:hover:bg-secondary-dark-light/20",
                success: "border-success text-success shadow-none hover:bg-success hover:text-white dark:border-success-dark-light dark:hover:bg-success-dark-light/20",
                danger: "border-danger text-danger shadow-none hover:bg-danger hover:text-white dark:border-danger-dark-light dark:hover:bg-danger-dark-light/20",
                warning: "border-warning text-warning shadow-none hover:bg-warning hover:text-white dark:border-warning-dark-light dark:hover:bg-warning-dark-light/20",
                info: "border-info text-info shadow-none hover:bg-info hover:text-white dark:border-info-dark-light dark:hover:bg-info-dark-light/20",
                dark: "border-dark text-dark shadow-none hover:bg-dark hover:text-white dark:border-2 dark:hover:bg-dark-light/10"
            },
            size: {
                small: 'px-2.5 py-1.5 text-xs',
                large: 'px-7 py-2.5 text-base',
            },
            fullWidth: {
                true: "w-full"
            },
            disabled: {
                true: "!opacity-50 !bg-gray-300 cursor-not-allowed !border-gray-300 dark:disabled:!bg-gray-500 dark:disabled:text-gray-300 dark:disabled:!border-gray-500"
            }
        },
        defaultVariants: {
        },
    }
);

interface ButtonProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof buttonStyles> {
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ className, outline, fill, size, icon, iconPosition = 'left', fullWidth, disabled, children, ...props }) => {
    return (
        <button disabled={disabled} className={clsx(buttonStyles({ outline, fill, size, disabled }), className)} {...props}>
            {iconPosition === 'left' && icon && <span>{icon}</span>}
            {children}
            {iconPosition === 'right' && icon && <span>{icon}</span>}
        </button>
    );
};