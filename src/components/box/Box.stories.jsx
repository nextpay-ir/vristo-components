import React from 'react';
import { Box } from './Box';

export default {
    title: 'Components/Box',
    component: Box,
    argTypes: {
        row: { control: 'boolean' },
        col: { control: 'boolean' },
    },
};

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Box',
};

export const RowLayout = Template.bind({});
RowLayout.args = {
    children: 'Box with row layout',
    row: true,
};

export const ColumnLayout = Template.bind({});
ColumnLayout.args = {
    children: 'Box with column layout',
    col: true,
};
