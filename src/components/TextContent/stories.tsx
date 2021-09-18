import { Story, Meta } from '@storybook/react/types-6-0'

import TextContent, { TextContentProps } from '.'
import mock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: mock
} as Meta

export const Default: Story<TextContentProps> = args => (
  <TextContent {...args} />
)
