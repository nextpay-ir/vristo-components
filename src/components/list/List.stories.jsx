import React from 'react';
import { List, ListItem } from './List';

export default {
    title: 'Components/List',
    component: List,
    subcomponents: { ListItem },
    argTypes: {
        className: { control: 'text' },
    },
};

const Template = (args) => (
    <List {...args}>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
    </List>
);

export const Default = Template.bind({});
Default.args = {
    className: '',
};

const ListItemTemplate = (args) => (
    <List>
        <ListItem {...args}>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
    </List>
);

export const CustomItem = ListItemTemplate.bind({});
CustomItem.args = {
    className: 'text-red-500',
};
