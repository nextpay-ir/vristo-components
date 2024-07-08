import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const inputStyles = cva(
    'w-full rounded-md border border-white-light bg-white px-4 py-2 text-sm text-black !outline-none focus:border-primary focus:ring-transparent dark:bg-[#121e32] dark:border-[#17263c] dark:text-white-dark',
    {
        variants: {
            size: {
                large: "py-2.5 text-base",
                small: "py-1.5 text-xs"
            },
            isSuccess: { true: "!border-success bg-success/[0.08] focus:border-success outline outline-[1px]" }
            ,
            isError: { true: "!border-danger bg-danger/[0.08] focus:border-danger outline outline-[1px]" },
            disabled: {
                true: "!opacity-70 !bg-gray-100 cursor-not-allowed"
            }
        },
        defaultVariants: {
        },
    }
);

interface InputProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof inputStyles> {
    placeholder?: string
    type?: string
    disabled?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, size, isSuccess, isError, type, disabled,...props }, ref) => {
    return (
        <input type={type} ref={ref} disabled={disabled} className={clsx(inputStyles({ size, isSuccess, isError, disabled }), className)} {...props} />
    );
});