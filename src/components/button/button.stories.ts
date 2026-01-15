import './button';

import { types } from './button.type';

import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  component: "ds-button",
  argTypes: {
    type: {
      control: { type: "select" },
      options: types,
    }
  }
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: "Button",
    type: "button"
  }
}