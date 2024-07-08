import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';

const labelStyles = cva(
    'block pr-1 dark:text-white-dark',
    {
        variants: {
            size: {
                small: 'text-xs',
                medium: 'text-sm',
                large: 'text-lg',
            },
            isSuccess: { true: "text-success" },
            isError: { true: "text-danger" },
            fontBold: {
                true: "font-bold"
            },
        },
        defaultVariants: {
            
        },
    }
);

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelStyles> {
    isRequired?: boolean
}

export const Label: React.FC<LabelProps> = ({ className, isRequired, size, isSuccess, isError, fontBold, ...props }) => {
    return (
        <div className='flex mb-1.5 items-baseline gap-0.5'>
            <label className={clsx(labelStyles({ size, isSuccess, isError, fontBold }), className)} {...props} />
            {isRequired && (
                <div className="text-danger font-bold">
                    *
                </div>
            )}
        </div>
    );
};