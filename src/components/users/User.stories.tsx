import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Users } from "./Users";

export default {
  title: "Components/Users",
  component: Users,
} as Meta<typeof Users>;

const Template: StoryFn<typeof Users> = () => <Users />;

export const Default = Template.bind({});
Default.storyName = "Default View";
