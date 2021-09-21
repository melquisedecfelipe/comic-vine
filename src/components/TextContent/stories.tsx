import { Story, Meta } from '@storybook/react/types-6-0'

import mock from './mock'

import TextContent, { TextContentProps } from '.'

export default {
  title: 'TextContent',
  component: TextContent,
  args: {
    content: mock
  }
} as Meta

export const Default: Story<TextContentProps> = args => (
  <TextContent {...args} />
)
