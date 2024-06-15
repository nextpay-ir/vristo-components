import React from 'react';
import { Select } from './Select';

export default {
    title: 'Components/Select',
    component: Select,
    argTypes: {
        size: {
            control: { type: 'select', options: ['small', 'large'] },
        },
        isError: {
            control: { type: 'boolean' },
        },
        isSuccess: {
            control: { type: 'boolean' },
        },
        options: {
            control: 'object',
        },
    },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    size: 'large',
    isError: false,
    isSuccess: false,
};

export const Small = Template.bind({});
Small.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    size: 'small',
    isError: false,
    isSuccess: false,
};

export const Error = Template.bind({});
Error.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    size: 'large',
    isError: true,
    isSuccess: false,
};

export const Success = Template.bind({});
Success.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    size: 'large',
    isError: false,
    isSuccess: true,
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    size: 'large',
    isError: false,
    isSuccess: false,
    className: 'custom-select-class',
};
