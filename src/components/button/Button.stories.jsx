import React from 'react';
import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        fill: {
            control: {
                type: 'select',
                options: [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'dark',
                ],
            },
        },
        outline: {
            control: {
                type: 'select',
                options: [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'dark',
                ],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'large'],
            },
        },
        fullWidth: {
            control: 'boolean',
        },
        iconPosition: {
            control: {
                type: 'select',
                options: ['left', 'right'],
            },
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    fill: 'primary',
    children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    fill: 'secondary',
    children: 'Secondary Button',
};

export const Success = Template.bind({});
Success.args = {
    fill: 'success',
    children: 'Success Button',
};

export const Danger = Template.bind({});
Danger.args = {
    fill: 'danger',
    children: 'Danger Button',
};

export const Warning = Template.bind({});
Warning.args = {
    fill: 'warning',
    children: 'Warning Button',
};

export const Info = Template.bind({});
Info.args = {
    fill: 'info',
    children: 'Info Button',
};

export const Dark = Template.bind({});
Dark.args = {
    fill: 'dark',
    children: 'Dark Button',
};

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
    outline: 'primary',
    children: 'Outline Primary Button',
};

export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
    outline: 'secondary',
    children: 'Outline Secondary Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    children: 'Small Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    children: 'Large Button',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    fullWidth: true,
    children: 'Full Width Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'disabled Button',
    disabled: true,
};
