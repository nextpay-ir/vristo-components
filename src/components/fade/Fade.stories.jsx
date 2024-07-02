import React, { useState } from 'react';
import { Fade } from './Fade';

export default {
    title: 'Components/Fade',
    component: Fade,
    argTypes: {
        in: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        timeout: {
            control: { type: 'number' },
            defaultValue: 500,
        },
    },
};

const Template = (args) => {
    const [show, setShow] = useState(args.in);

    return (
        <div className="p-4">
            <button
                onClick={() => setShow((prev) => !prev)}
                className="mb-4 p-2 bg-blue-500 text-white rounded"
            >
                Toggle Fade
            </button>
            <Fade {...args} in={show}>
                <div className="p-4 bg-gray-200 rounded">
                    This content will fade in and out
                </div>
            </Fade>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    in: false,
    timeout: 500,
};

export const Visible = Template.bind({});
Visible.args = {
    in: true,
    timeout: 500,
};

export const LongDuration = Template.bind({});
LongDuration.args = {
    in: true,
    timeout: 2000,
};

export const ShortDuration = Template.bind({});
ShortDuration.args = {
    in: true,
    timeout: 200,
};
