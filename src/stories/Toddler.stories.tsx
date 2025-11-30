import type { Meta, StoryObj } from '@storybook/react-vite';

import { AnatomyPicker } from '../index';

const meta = {
    component: AnatomyPicker,
} satisfies Meta<typeof AnatomyPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToddlerMaleFront: Story = {
    args: {
        model: "toddler-male",
        orientation: "front",
        width: 400,
        height: 400
    },
};

export const ToddlerMaleBack: Story = {
    args: {
        model: "toddler-male",
        orientation: "back",
        width: 400,
        height: 400
    }
}

export const ToddlerFemaleFront: Story = {
    args: {
        model: "toddler-female",
        orientation: "front",
        width: 400,
        height: 400
    }
}

export const ToddlerFemaleBack: Story = {
    args: {
        model: "toddler-female",
        orientation: "back",
        width: 400,
        height: 400
    }
}