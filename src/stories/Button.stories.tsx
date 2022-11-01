import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button/Button";
import { Link, MemoryRouter } from "react-router-dom";

export default {
  title: "Button",
  component: Button,
  argTypes: { action: { action: "click" } },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Hello world</Button>;

export const RegularButton = Template.bind({});
RegularButton.args = {
  as: "button",
};

export const ButtonAsLink = Template.bind({});
ButtonAsLink.args = {
  as: Link,
  to: "",
};
