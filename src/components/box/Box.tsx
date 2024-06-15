import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const boxStyles = cva(
    '',
    {
        variants: {
            row: {
                true: "flex flex-row items-center"
            },
            col: {
                true: "flex flex-col"
            },
        },
        defaultVariants: {
        },
    }
);

interface BoxProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof boxStyles> {
    row?: boolean;
    col?: boolean;
    gap?: string;
}

export const Box: React.FC<BoxProps> = ({ className, row, col, gap, ...props }) => {
    const classes = boxStyles({ row, col });

    return (
        <div className={clsx(classes, gap && `gap-${gap}`, className)} {...props} />
    );
};
