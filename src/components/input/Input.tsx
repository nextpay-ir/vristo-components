import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const inputStyles = cva(
    'w-full rounded-md border border-white-light bg-white px-4 py-2 text-sm font-semibold text-black !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary',
    {
        variants: {
            size: {
                large: "py-2.5 text-base",
                small: "py-1.5 text-xs"
            },
            isSuccess: { true: "border-success bg-success/[0.08] text-success placeholder-success/70 focus:border-success" }
            ,
            isError: { true: "border-danger bg-danger/[0.08] text-danger placeholder-danger/70 focus:border-danger" }
        },
        defaultVariants: {
        },
    }
);

interface InputProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof inputStyles> {
    placeholder?: string
}

export const Input: React.FC<InputProps> = ({ className, size, isSuccess, isError, ...props }) => {
    return (
        <input className={clsx(inputStyles({ size, isSuccess, isError }), className)} {...props} />
    );
};