import {cva, VariantProps} from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';

const skeletonStyles = cva('bg-gray-200 animate-pulse rounded');

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonStyles> {}

export const Skeleton: React.FC<SkeletonProps> = ({className, ...props}) => {
    const customStyles: React.CSSProperties = {};

    return (
        <div
            className={clsx(skeletonStyles(), className)}
            style={customStyles}
            {...props}
        />
    );
};
