import React from 'react';
import { Input } from './Input';

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        size: {
            control: { type: 'select', options: ['small', 'large'] },
        },
        isSuccess: {
            control: { type: 'boolean' },
        },
        isError: {
            control: { type: 'boolean' },
        },
        placeholder: {
            control: { type: 'text' },
        },
    },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Enter text...',
};

export const Small = Template.bind({});
Small.args = {
    placeholder: 'Enter text...',
    size: 'small',
};

export const Large = Template.bind({});
Large.args = {
    placeholder: 'Enter text...',
    size: 'large',
};

export const Error = Template.bind({});
Error.args = {
    placeholder: 'Enter text...',
    isError: true,
};

export const Success = Template.bind({});
Success.args = {
    placeholder: 'Enter text...',
    isSuccess: true,
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
    placeholder: 'Enter text...',
    className: 'custom-input-class',
};
