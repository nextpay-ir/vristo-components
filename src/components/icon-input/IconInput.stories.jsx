import React from 'react';
import { IconInput } from './IconInput';

export default {
    title: 'Components/IconInput',
    component: IconInput,
    argTypes: {
        icon: {
            control: { type: 'text' },
        },
        label: {
            control: { type: 'text' },
        },
        isSuccess: {
            control: { type: 'boolean' },
        },
        isError: {
            control: { type: 'boolean' },
        },
        size: {
            control: { type: 'select', options: ['small', 'large'] },
        },
        placeholder: {
            control: { type: 'text' },
        },
        iconPosition: {
            control: { type: 'radio', options: ['left', 'right'] },
        },
    },
};

const Template = (args) => <IconInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    icon: 'bx:bxs-user',
    placeholder: 'Enter text...',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    icon: 'bx:bxs-lock',
    label: 'Password',
    placeholder: 'Enter password...',
};

export const Small = Template.bind({});
Small.args = {
    icon: 'bx:bxs-envelope',
    placeholder: 'Enter email...',
    size: 'small',
};

export const Large = Template.bind({});
Large.args = {
    icon: 'bx:bxs-calendar',
    placeholder: 'Select date...',
    size: 'large',
};

export const Error = Template.bind({});
Error.args = {
    icon: 'bx:bxs-error',
    placeholder: 'Error message...',
    isError: true,
};

export const Success = Template.bind({});
Success.args = {
    icon: 'bx:bxs-check-circle',
    placeholder: 'Success message...',
    isSuccess: true,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
    icon: 'bx:bxs-search',
    placeholder: 'Search...',
    iconPosition: 'right',
};
