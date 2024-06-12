import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const helperStyles = cva(
    'mt-1',
    {
        variants: {
            isSuccess: { true: "text-success" }
            ,
            isError: { true: "text-danger" }
        },
        defaultVariants: {
        },
    }
);

interface TextProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof helperStyles> { }

const HelperText: React.FC<TextProps> = ({ className, isSuccess, isError, ...props }) => {
    return (
        <p className={clsx(helperStyles({ isSuccess, isError }), className)} {...props} />
    );
};

export default HelperText;
