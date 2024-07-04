import React from 'react';
import { Grid } from './Grid';

export default {
    title: 'Components/Grid',
    component: Grid,
    argTypes: {
        container: {
            control: { type: 'boolean' },
        },
        item: {
            control: { type: 'boolean' },
        },
        spacing: {
            control: { type: 'number' },
        },
        xs: {
            control: { type: 'number' },
        },
        sm: {
            control: { type: 'number' },
        },
        md: {
            control: { type: 'number' },
        },
        lg: {
            control: { type: 'number' },
        },
        xl: {
            control: { type: 'number' },
        },
    },
};

const Template = (args) => (
    <Grid container spacing={args.spacing}>
        <Grid item xs={3}>
            <div className="bg-red-200 p-4">xs=3</div>
        </Grid>
        <Grid item xs={3}>
            <div className="bg-blue-200 p-4">xs=3</div>
        </Grid>
        <Grid item xs={3}>
            <div className="bg-yellow-200 p-4">xs=3</div>
        </Grid>
        <Grid item xs={2}>
            <div className="bg-slate-200 p-4">xs=2</div>
        </Grid>
    </Grid>
);

export const Default = Template.bind({});
Default.args = {
    spacing: 2,
};

export const Responsive = Template.bind({});
Responsive.args = {
    spacing: 2,
    xs: 12,
    sm: 6,
    md: 4,
};