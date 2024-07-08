import React from 'react';
import clsx from 'clsx';

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
}

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
}

export const List: React.FC<ListProps> = ({ children, className, ...props }) => {
    const defaultClasses = 'list-none';

    return (
        <ul className={clsx(defaultClasses, className)} {...props}>
            {children}
        </ul>
    );
};

export const ListItem: React.FC<ListItemProps> = ({ children, className, ...props }) => {

    return (
        <li className={clsx(className)} {...props}>
            {children}
        </li>
    );
};
