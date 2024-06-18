import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { Icon } from '@iconify/react';
import { Input } from '../input';
import { Label } from '../label';

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
    type?: string
}

export const IconInput: React.FC<IconInputProps> = ({ className, label, icon, isSuccess, isError, size, type, iconPosition = 'left', ...props }) => {
    return (
        <div>
            {label && <Label className="mb-1.5" size="medium" htmlFor={props.id}>{label}</Label>}
            <div className={clsx(iconInputStyles({ iconPosition }), className)}>
                <Icon icon={icon} width={20} height={20} className={`absolute top-1/2 transform -translate-y-1/2 text-black dark:text-white ${iconPosition == "left" ? "left-3" : "right-3"}`} />
                <Input type={type} {...props} isSuccess={isSuccess} isError={isError} size={size} className={iconPosition == "left" ? "pl-9" : "pr-3"} />
            </div>
        </div>
    );
};