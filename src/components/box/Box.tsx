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
            justifyContent: {
                start: 'justify-start',
                center: 'justify-center',
                end: 'justify-end',
                between: 'justify-between',
                around: 'justify-around',
                evenly: 'justify-evenly'
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
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

export const Box: React.FC<BoxProps> = ({ className, row, col, gap, justifyContent, ...props }) => {
    const classes = boxStyles({ row, col });

    return (
        <div className={clsx(classes, gap && `gap-${gap}`, className)} {...props} />
    );
};
