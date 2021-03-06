import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'

import { Story, Meta } from '@storybook/react/types-6-0'

import Input, { InputProps } from '.'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    initialValue: '',
    icon: SearchIcon,
    placeholder: 'Search here'
  },
  argTypes: {
    handleChange: { action: 'inputChange' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<InputProps> = args => (
  <div style={{ maxWidth: 300 }}>
    <Input {...args} />
  </div>
)
