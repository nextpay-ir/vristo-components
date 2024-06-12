import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const checkboxStyles = cva(
    'h-5 w-5 cursor-pointer rounded border-2 border-white-light bg-transparent text-primary !shadow-none !outline-none !ring-0 !ring-offset-0 checked:bg-[length:90%_90%] disabled:cursor-not-allowed disabled:bg-[#eee] ltr:mr-1.5 rtl:ml-1.5 dark:border-[#253b5c] dark:checked:border-transparent dark:disabled:bg-[#1b2e4b]',
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

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement>, VariantProps<typeof checkboxStyles> {
    text?: string;
    value: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, size, text, value, isError, ...props }, ref) => {
    return (
        <label className="inline-flex items-center">
            <input ref={ref} type="checkbox" className={clsx(checkboxStyles({ size, isError }), className)}
                {...props} />
            {text && <span>{text}</span>}
        </label>
    );
});

export default Checkbox;
