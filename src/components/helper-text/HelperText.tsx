import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const helperStyles = cva(
    'mt-1',
    {
        variants: {
            size: {
                extraSmall: "text-xs",
                small: "text-sm",
                medium: "text-base",
                large: "text-lg"
            },
            isSuccess: { true: "text-success" }
            ,
            isError: { true: "text-danger" }
        },
        defaultVariants: {
            size: 'extraSmall'
        },
    }
);

interface TextProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof helperStyles> { }

export const HelperText: React.FC<TextProps> = ({ className, isSuccess, isError, size, ...props }) => {
    return (
        <p className={clsx(helperStyles({ isSuccess, isError, size }), className)} {...props} />
    );
};