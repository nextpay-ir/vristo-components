import React from 'react';
import { Label } from './Label';

export default {
    title: 'Components/Label',
    component: Label,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        isSuccess: {
            control: 'boolean',
        },
        isError: {
            control: 'boolean',
        },
        fontBold: {
            control: 'boolean',
        },
    },
};

const Template = (args) => <Label {...args} />;

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    children: 'Small Label',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    children: 'Medium Label',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    children: 'Large Label',
};

export const Success = Template.bind({});
Success.args = {
    isSuccess: true,
    children: 'Success Label',
};

export const Error = Template.bind({});
Error.args = {
    isError: true,
    children: 'Error Label',
};

export const Bold = Template.bind({});
Bold.args = {
    fontBold: true,
    children: 'Bold Label',
};

export const SuccessBold = Template.bind({});
SuccessBold.args = {
    isSuccess: true,
    fontBold: true,
    children: 'Success Bold Label',
};

export const ErrorBold = Template.bind({});
ErrorBold.args = {
    isError: true,
    fontBold: true,
    children: 'Error Bold Label',
};

export const Required = Template.bind({});
Required.args = {
    isError: false,
    children: 'required Label',
    size: "small",
    isRequired: true
};
