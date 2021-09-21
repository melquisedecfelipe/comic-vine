import { Story, Meta } from '@storybook/react/types-6-0'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    onClick: { action: 'buttonClick' }
  }
} as Meta

export const Default: Story = args => <Button {...args} />

Default.args = {
  children: 'Button Component'
}

export const asLink: Story = args => <Button {...args} />

asLink.args = {
  variant: 'outlined',
  children: 'Link Component',
  as: 'a'
}

asLink.argTypes = {
  onClick: { action: 'linkClick' }
}
