import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac imperdiet felis, ac tristique orci. Pellentesque in diam quis ex semper convallis. Phasellus convallis lacus justo, fringilla pellentesque velit maximus ac. Ut tincidunt condimentum ligula in pellentesque. Phasellus sodales porta odio, a vulputate orci rhoncus id. Integer tincidunt efficitur finibus. Aliquam id tortor vel mi malesuada efficitur. Vivamus sit amet nibh at libero porta lobortis id finibus ante. Donec id commodo libero. Aenean a sollicitudin nibh. Nulla laoreet sem a enim tristique, in semper enim finibus. Aliquam pharetra efficitur diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean pretium sagittis hendrerit. Quisque eget dolor eget velit ornare congue a in velit. In quis ligula viverra, rutrum eros vitae, iaculis neque.',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'information', 'success', 'danger', 'warning'],
    },
  },
} satisfies Meta;

export default meta;
export type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
  args: {
    title: 'Primary',
    variant: 'primary',
  },
};

export const Information: Story = {
  args: {
    title: 'Information',
    variant: 'information',
  },
};

export const Danger: Story = {
  args: {
    title: 'Danger',
    variant: 'danger',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    variant: 'warning',
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    variant: 'success',
  },
};
