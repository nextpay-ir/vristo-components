import React from 'react';
import clsx from 'clsx';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    container?: boolean;
    item?: boolean;
    spacing?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

export const Grid: React.FC<GridProps> = ({ container, item, spacing = 2, xs, sm, md, lg, xl, children, className, ...props }) => {
    const containerClass = container ? `grid grid-cols-12 gap-${spacing}` : '';
    const itemClass = item
        ? clsx(
            xs && `col-span-${xs}`,
            sm && `sm:col-span-${sm}`,
            md && `md:col-span-${md}`,
            lg && `lg:col-span-${lg}`,
            xl && `xl:col-span-${xl}`
        )
        : '';

    return (
        <div className={clsx(containerClass, itemClass, className)} {...props}>
            {children}
        </div>
    );
};