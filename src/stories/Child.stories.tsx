import type { Meta, StoryObj } from '@storybook/react-vite';

import { AnatomyPicker } from '../index';

const meta = {
    component: AnatomyPicker,
} satisfies Meta<typeof AnatomyPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const childMaleFront: Story = {
    args: {
        model: "child-male",
        orientation: "front",
        width: 400,
        height: 400
    },
};

export const ChildMaleBack: Story = {
    args: {
        model: "child-male",
        orientation: "back",
        width: 400,
        height: 400
    }
}

export const ChildFemaleFront: Story = {
    args: {
        model: "child-female",
        orientation: "front",
        width: 400,
        height: 400
    }
}

export const ChildFemaleBack: Story = {
    args: {
        model: "child-female",
        orientation: "back",
        width: 400,
        height: 400
    }
}