import { Typography } from './Typography';

export default {
    title: 'Components/Typography',
    component: Typography,
    argTypes: {
        as: {
            control: {
                type: 'select',
                options: [
                    'p',
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6',
                    'span',
                    'div',
                ],
            },
        },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
        },
        weight: {
            control: {
                type: 'select',
                options: ['normal', 'semibold', 'bold'],
            },
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'success', 'danger'],
            },
        },
    },
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'This is a default typography component',
    as: 'p',
    size: 'medium',
    weight: 'normal',
    color: 'primary',
};

export const Small = Template.bind({});
Small.args = {
    children: 'This is a small typography component',
    as: 'p',
    size: 'small',
    weight: 'normal',
    color: 'primary',
};

export const LargeBold = Template.bind({});
LargeBold.args = {
    children: 'This is a large and bold typography component',
    as: 'p',
    size: 'large',
    weight: 'bold',
    color: 'primary',
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
    children: 'This is a typography component with secondary color',
    as: 'p',
    size: 'medium',
    weight: 'normal',
    color: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
    children: 'This is a danger typography component',
    as: 'p',
    size: 'medium',
    weight: 'normal',
    color: 'danger',
};

export const Black = Template.bind({});
Black.args = {
    children: 'This is a black typography component',
    as: 'p',
    size: 'medium',
    weight: 'normal',
    color: 'black',
};
