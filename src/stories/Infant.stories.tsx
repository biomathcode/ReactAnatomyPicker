import type { Meta, StoryObj } from '@storybook/react-vite';

import { AnatomyPicker } from '../index';

const meta = {
    component: AnatomyPicker,
} satisfies Meta<typeof AnatomyPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const infant: Story = {
    args: {
        model: "infant",
        orientation: "front",
        width: 400,
        height: 400
    },
};

