import React from "react";
import clsx from 'clsx';

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {

}

export const Tabs: React.FC<TabsProps> = ({ children, className, ...props }) => {

    return (
        <div className={clsx(className)} {...props}>
            {children}
        </div>
    );
};