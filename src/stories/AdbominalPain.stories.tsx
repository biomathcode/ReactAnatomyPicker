import type { Meta, StoryObj } from '@storybook/react-vite';

import { AnatomyPicker } from '../index';

const meta = {
    component: AnatomyPicker,
} satisfies Meta<typeof AnatomyPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdbominalPainMale: Story = {
    args: {
        model: "abdominal-pain-male",
        // orientation: "back",
        width: 400,
        height: 400
    }
}

export const AdbominalPainFemale: Story = {
    args: {
        model: "abdominal-pain-female",
        // orientation: "front",
        width: 400,
        height: 400
    }
}

