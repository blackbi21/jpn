import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost", "link", "destructive"],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Button" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Outline" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Ghost" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Delete" },
};

export const Link: Story = {
  args: { variant: "link", children: "Link button" },
};

export const Disabled: Story = {
  args: { disabled: true, children: "Disabled" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="xs">XSmall</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
