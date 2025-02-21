import type { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  component: Img,
  title: 'Components/Img',
  argTypes: {
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png',
    alt: 'Placeholder Image',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png',
    alt: 'Placeholder Image',
    disabled: true,
  },
};