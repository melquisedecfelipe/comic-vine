import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'

import { Story, Meta } from '@storybook/react/types-6-0'

import mockGender from 'mock/gender'

import Select, { SelectProps } from '.'

export default {
  title: 'Form/Select',
  component: Select,
  args: {
    icon: SearchIcon,
    options: mockGender,
    placeholder: 'Select here'
  },
  argTypes: {
    icon: { type: '' }
  }
} as Meta

export const Default: Story<SelectProps> = args => (
  <div style={{ maxWidth: 300 }}>
    <Select {...args} />
  </div>
)
