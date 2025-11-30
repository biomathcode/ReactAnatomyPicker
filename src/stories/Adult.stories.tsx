import type { Meta, StoryObj } from '@storybook/react-vite';

import { AnatomyPicker } from '../index';

const meta = {
  component: AnatomyPicker,
} satisfies Meta<typeof AnatomyPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdultMaleFront: Story = {
  args: {
    model: "adult-male",
    orientation: "front",
    width: 400,
    height: 400
  },
};

export const AdultMaleBack: Story = {
  args: {
    model: "adult-male",
    orientation: "back",
    width: 400,
    height: 400
  }
}

export const AdultFemaleFront: Story = {
  args: {
    model: "adult-female",
    orientation: "front",
    width: 400,
    height: 400
  }
}

export const AdultFemaleBack: Story = {
  args: {
    model: "adult-female",
    orientation: "back",
    width: 400,
    height: 400
  }
}