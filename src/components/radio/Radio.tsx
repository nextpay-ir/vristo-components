import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const radioStyles = cva(
    'h-5 w-5 cursor-pointer rounded border-2 border-white-light bg-transparent text-primary !shadow-none !outline-none !ring-0 !ring-offset-0 checked:bg-[length:90%_90%] disabled:cursor-not-allowed disabled:bg-[#eee] ltr:mr-1.5 rtl:ml-1.5 dark:border-[#253b5c] dark:checked:border-transparent dark:disabled:bg-[#1b2e4b] rounded-full',
    {
        variants: {
            size: {
                small: 'h-4 w-4',
                medium: 'h-5 w-5',
                large: 'h-6 w-6',
            },
            isError: {
                true: "border-danger"
            },
        },
        defaultVariants: {
            size: 'medium',
        },
    }
);

interface RadioProps extends React.HTMLAttributes<HTMLInputElement>, VariantProps<typeof radioStyles> {
    text?: string;
    name: string;
    value: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({ className, size, text, name, value, isError, ...props }, ref) => {
    return (
        <label className="inline-flex items-center gap-1">
            <input
                ref={ref}
                type="radio"
                name={name}
                value={value}
                className={clsx(radioStyles({ size, isError }), className)}
                {...props}
            />
            {text && <span>{text}</span>}
        </label>
    );
});