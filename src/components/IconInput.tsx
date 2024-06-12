import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { Icon } from '@iconify/react';
import { Input } from '..';
import Label from './Label';

const iconInputStyles = cva(
    'relative',
    {
        variants: {
            iconPosition: {
                left: "left",
                right: "right"
            },
        }
    }
);

interface IconInputProps extends React.HTMLAttributes<HTMLInputElement>, VariantProps<typeof iconInputStyles> {
    icon: string;
    label?: string;
    isSuccess?: boolean;
    isError?: boolean;
    size?: 'small' | 'large';
    placeholder?: string,
}

const IconInput: React.FC<IconInputProps> = ({ className, label, icon, isSuccess, isError, size, iconPosition = 'left', ...props }) => {
    return (
        <div className={clsx(iconInputStyles({ iconPosition }), className)}>
            {label && <Label className="mb-1.5" size="medium" htmlFor={props.id}>{label}</Label>}
            <div className={clsx(iconInputStyles({ iconPosition }), className)}>
                <Icon icon={icon} width={20} height={20} className={`absolute top-1/2 transform -translate-y-1/2 text-black dark:text-white ${iconPosition == "left" ? "left-3" : "right-3"}`} />
                <Input {...props} isSuccess={isSuccess} isError={isError} size={size} className={iconPosition == "left" ? "pl-9" : ""} />
            </div>
        </div>
    );
};

export default IconInput;
