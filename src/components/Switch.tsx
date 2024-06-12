import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const switchStyles = cva(
    'peer absolute z-10 h-full w-full cursor-pointer opacity-0',
    {
        variants: {
        },
        defaultVariants: {
        },
    }
);

interface SwitchProps extends React.HTMLAttributes<HTMLInputElement>, VariantProps<typeof switchStyles> {
    value: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(({ className, value, id, ...props }, ref) => {
    return (
        <label className="relative h-6 w-12">
            <input type="checkbox" ref={ref} value={value} className={clsx(switchStyles(), className)} {...props} id={id} />
            <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:bottom-1 before:left-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
        </label>
    );
});

export default Switch;
