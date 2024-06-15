import React from 'react';
import { Switch } from './Switch';

export default {
    title: 'Components/Switch',
    component: Switch,
    argTypes: {
        value: {
            control: { type: 'text' },
        },
    },
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 'switch1',
};

export const WithId = Template.bind({});
WithId.args = {
    value: 'switch2',
    id: 'switch-id',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
    value: 'switch3',
    className: 'custom-switch-class',
};
