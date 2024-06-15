import React from 'react';
import { Radio } from './Radio';

export default {
    title: 'Components/Radio',
    component: Radio,
    argTypes: {
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
        },
        isError: {
            control: { type: 'boolean' },
        },
        text: {
            control: { type: 'text' },
        },
        name: {
            control: { type: 'text' },
        },
        value: {
            control: { type: 'text' },
        },
    },
};

const Template = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'radio',
    value: 'default',
    text: 'Default Radio',
    size: 'medium',
    isError: false,
};

export const Small = Template.bind({});
Small.args = {
    name: 'radio',
    value: 'small',
    text: 'Small Radio',
    size: 'small',
    isError: false,
};

export const Large = Template.bind({});
Large.args = {
    name: 'radio',
    value: 'large',
    text: 'Large Radio',
    size: 'large',
    isError: false,
};

export const Error = Template.bind({});
Error.args = {
    name: 'radio',
    value: 'error',
    text: 'Error Radio',
    size: 'medium',
    isError: true,
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
    name: 'radio',
    value: 'custom',
    text: 'Custom Class Radio',
    size: 'medium',
    isError: false,
    className: 'custom-radio-class',
};
