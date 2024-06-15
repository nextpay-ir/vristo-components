import React, { useState } from 'react';
import { Modal } from './Modal';

export default {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        transition: {
            control: {
                type: 'boolean',
            },
        },
        fade: {
            control: {
                type: 'boolean',
            },
        },
        sizes: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg', 'xl', 'full'],
            },
        },
        placement: {
            control: {
                type: 'select',
                options: ['top', 'center', 'bottom'],
            },
        },
    },
};

const Template = (args) => {
    const [modalOpen, setModalOpen] = useState(false);

    console.log('modalOpen', modalOpen);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <button onClick={openModal}>Open Modal</button>
            <Modal {...args} style={{ display: modalOpen ? 'block' : 'none' }}>
                Modal Content
                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        </>
    );
};

export const Basic = Template.bind({});
Basic.args = {};

export const WithVariants = Template.bind({});
WithVariants.args = {
    transition: true,
    fade: true,
    sizes: 'md',
    placement: 'center',
};
