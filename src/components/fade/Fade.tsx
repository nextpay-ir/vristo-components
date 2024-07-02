import React, { useEffect, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const fadeStyles = cva(
    'transition-opacity duration-500 ease-in-out',
    {
        variants: {
            in: {
                true: 'opacity-100',
                false: 'opacity-0',
            },
        },
        defaultVariants: {
            in: false,
        },
    }
);

interface FadeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof fadeStyles> {
    in: boolean;
    timeout?: number;
}

export const Fade: React.FC<FadeProps> = ({ in: inProp, timeout = 500, className, children, ...props }) => {
    const [visible, setVisible] = useState(inProp);

    useEffect(() => {
        if (inProp) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => setVisible(false), timeout);
            return () => clearTimeout(timer);
        }
    }, [inProp, timeout]);

    return (
        <div
            className={clsx(fadeStyles({ in: inProp }), className)}
            style={{ display: visible ? 'block' : 'none' }}
            {...props}
        >
            {children}
        </div>
    );
};
