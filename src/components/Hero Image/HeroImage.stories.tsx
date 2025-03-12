import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  component: HeroImage,
  title: 'Components/HeroImage',
  argTypes: {
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    imageUrl:
      'https://cdn.indiabioscience.org/imager/articles/411714/Aniruddha_feature-image_4b32b63c5c28c858e051e9d1a2a717a1.png',
    title: 'title',
    subtitle: 'meme',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    imageUrl:
      'https://cdn.indiabioscience.org/imager/articles/411714/Aniruddha_feature-image_4b32b63c5c28c858e051e9d1a2a717a1.png',
    title: 'title',
    subtitle: 'meme',
    disabled: true,
  },
};
