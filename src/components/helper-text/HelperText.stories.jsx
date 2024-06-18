import React from 'react';
import { HelperText } from './HelperText';

export default {
    title: 'Components/HelperText',
    component: HelperText,
    argTypes: {
        isSuccess: {
            control: { type: 'boolean' },
        },
        isError: {
            control: { type: 'boolean' },
        },
    },
};

const Template = (args) => <HelperText {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'This is a helper text component',
};

export const Success = Template.bind({});
Success.args = {
    children: 'This is a success helper text',
    isSuccess: true,
    isError: false,
};

export const Error = Template.bind({});
Error.args = {
    children: 'This is an error helper text',
    isSuccess: false,
    isError: true,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
    children: 'This is a helper text with a custom class',
    className: 'custom-class',
    isSuccess: false,
    isError: false,
};

export const ExtraHelperText = Template.bind({});
ExtraHelperText.args = {
    children: 'This is a extra small helper text',
    isSuccess: false,
    isError: false,
    size: "extraSmall"
};

export const SmallHelper = Template.bind({});
SmallHelper.args = {
    children: 'This is a small helper text',
    isSuccess: false,
    isError: false,
    size: "small"
};

export const MediumHelper = Template.bind({});
MediumHelper.args = {
    children: 'This is a medium helper text',
    isSuccess: false,
    isError: false,
    size: "medium"
};

export const LargeHelper = Template.bind({});
LargeHelper.args = {
    children: 'This is a large helper text',
    isSuccess: false,
    isError: false,
    size: "large"
};
