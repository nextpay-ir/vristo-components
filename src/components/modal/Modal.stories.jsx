import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { Icon } from "@iconify/react";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    transition: {
      control: {
        type: "boolean",
      },
    },
    fade: {
      control: {
        type: "boolean",
      },
    },
    sizes: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", "full"],
      },
    },
    placement: {
      control: {
        type: "select",
        options: ["top", "center", "bottom"],
      },
    },
  },
};

const Content = ({ title, body, footer }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{body}</p>
      <div>{footer}</div>
    </>
  );
};

const Template = (args) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button className="p-4" onClick={handleModal}>
        Open Modal
      </button>
      <div onClick={handleModal} className="backdrop-blur-sm bg-white/30">
        <Modal modalOpen={modalOpen} {...args}>
          <Content
            footer="footer"
            body={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}
            title="title"
          />
          <button
            className="hover:text-danger fixed top-3 right-3"
            onClick={handleModal}
          >
            <Icon icon="system-uicons:close" width={25} height={25} />
          </button>
        </Modal>
      </div>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  content: <Content />,
  transition: true,
};

export const WithVariants = Template.bind({});
WithVariants.args = {
  transition: true,
  sizes: "md",
  placement: "center",
};
