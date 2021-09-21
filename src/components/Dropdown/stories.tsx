import { Story, Meta } from '@storybook/react/types-6-0'

import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    children: 'Dropdown content',
    title: 'Dropdown'
  }
} as Meta

export const Default: Story<DropdownProps> = args => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <Dropdown {...args} />
  </div>
)
