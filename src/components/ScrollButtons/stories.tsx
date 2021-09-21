import { Story, Meta } from '@storybook/react/types-6-0'

import ScrollButtons, { ScrollButtonsProps } from '.'

export default {
  title: 'ScrollButtons',
  component: ScrollButtons,
  argTypes: {
    handleDown: { action: 'handleDownClick' },
    handleUp: { action: 'handleUpClick' }
  }
} as Meta

export const Default: Story<ScrollButtonsProps> = args => (
  <ScrollButtons {...args} />
)
