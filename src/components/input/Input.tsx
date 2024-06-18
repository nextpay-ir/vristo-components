import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const inputStyles = cva(
    'w-full rounded-md border border-white-light bg-white px-4 py-2 text-sm text-black !outline-none focus:border-primary focus:ring-transparent',
    {
        variants: {
            size: {
                large: "py-2.5 text-base",
                small: "py-1.5 text-xs"
            },
            isSuccess: { true: "!border-success bg-success/[0.08] focus:border-success outline outline-[1px]" }
            ,
            isError: { true: "!border-danger bg-danger/[0.08] focus:border-danger outline outline-[1px]" }
        },
        defaultVariants: {
        },
    }
);

interface InputProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof inputStyles> {
    placeholder?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, size, isSuccess, isError, ...props }, ref) => {
    return (
        <input ref={ref} className={clsx(inputStyles({ size, isSuccess, isError }), className)} {...props} />
    );
});