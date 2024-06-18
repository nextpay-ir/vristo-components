import React from 'react';
import { Alert } from './Alert';

export default {
    title: 'Components/Alert',
    component: Alert,
    argTypes: {
        position: {
            control: {
                type: 'select',
                options: [
                    'bottom',
                    'top',
                    'center',
                    'bottom-left',
                    'bottom-right',
                    'bottom-end',
                    'bottom-start',
                    'top-right',
                    'top-left',
                    'top-start',
                    'top-end',
                    'center-start',
                    'center-end',
                    'center-right',
                    'center-left',
                ],
            },
        },
        icon: {
            control: {
                type: 'select',
                options: ['error', 'info', 'question', 'success'],
            },
        },
        title: {
            control: 'text',
        },
        showConfirmButton: {
            control: 'boolean',
        },
        timer: {
            control: 'number',
        },
    },
};

const Template = (args) => {
    const handleAlert = async () => {
        try {
            await Alert(args);
        } catch (error) {
            console.error('Error showing alert:', error);
        }
    };

    return <button onClick={handleAlert}>Show Alert</button>;
};

export const Basic = Template.bind({});
Basic.args = {
    title: 'Hello, World!',
    icon: 'success',
    position: 'top-end',
    showConfirmButton: false,
    timer: undefined,
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
    title: 'Error!',
    icon: 'error',
    position: 'top-start',
    showConfirmButton: true,
    timer: undefined,
};

export const CustomTimer = Template.bind({});
CustomTimer.args = {
    title: 'Custom Timer Alert',
    icon: 'info',
    position: 'bottom-end',
    showConfirmButton: true,
    timer: 5000, 
};

export const NoConfirmButton = Template.bind({});
NoConfirmButton.args = {
    title: 'No Confirm Button Alert',
    icon: 'warning',
    position: 'center',
    showConfirmButton: false,
    timer: 3000, 
    timerProgressBar: true
};
