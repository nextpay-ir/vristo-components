import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const labelStyles = cva(
    'mb-1.5 block font-semibold',
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
        defaultVariants: {},
    }
);

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelStyles> { }

const Label: React.FC<LabelProps> = ({ className, size, isSuccess, isError, fontBold, ...props }) => {
    return (
        <label className={clsx(labelStyles({ size, isSuccess, isError, fontBold }), className)} {...props} /> 
    );
};

export default Label;
