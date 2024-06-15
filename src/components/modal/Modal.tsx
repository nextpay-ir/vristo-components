import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const modalStyles = cva(
    'fixed inset-0 z-50 overflow-auto flex justify-center items-center',
    {
        variants: {
            transition: {
                true: 'transition duration-300 ease-in-out'
            },
            fade: {
                true: 'opacity-0'
            },
            sizes: {
                sm: 'max-w-sm',
                md: 'max-w-md',
                lg: 'max-w-lg',
                xl: 'max-w-xl',
                full: 'w-full'
            },
            placement: {
                top: 'items-start',
                center: 'items-center',
                bottom: 'items-end'
            }
        },
        defaultVariants: {
            transition: true,
            fade: true,
            sizes: 'sm',
            placement: 'center'
        },
    }
);

interface ModalProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof modalStyles> {
}

export const Modal: React.FC<ModalProps> = ({ className, children, transition, fade, sizes, placement, ...props }) => {
    return (
        <div className={clsx(modalStyles({ placement, sizes, transition, fade }), className)} {...props} />
    );
};