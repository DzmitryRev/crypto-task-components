import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loading from "../components/Loading/Loading";
import React from "react";

export default {
  title: "Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const Default = Template.bind({});
