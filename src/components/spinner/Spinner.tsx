import {cva, VariantProps} from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';

const spinnerStyles = cva(
    'm-auto mb-10 inline-block animate-spin rounded-full border-4  border-l-transparent align-middle',
    {
        variants: {
            color: {
                primary: 'border-primary',
                secondary: 'border-secondary',
                success: 'border-success',
                danger: 'border-warning',
                warning: 'border-warning',
                black: 'border-black',
                white: 'border-white'
            },
            size: {
                small: "h-6 w-6",
                medium: "h-10 w-10",
                large: "h-12 w-12"
            }
        },
    }
)

interface SpinnerProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof spinnerStyles> {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'warning' | 'black' | 'success' | 'white' | 'danger';
}

export const Spinner: React.FC<SpinnerProps> = ({className, size, color, ...props}) => {
    return (
        <span className={clsx(spinnerStyles({size, color}), className)} {...props} />
    );
};