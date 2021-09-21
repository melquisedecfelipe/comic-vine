import { Story, Meta } from '@storybook/react/types-6-0'

import mockOptions from 'mock/options'

import CharacterAutocomplete, { CharacterAutocompleteProps } from '.'

export default {
  title: 'Form/CharacterAutocomplete',
  component: CharacterAutocomplete,
  args: {
    options: mockOptions
  },
  argTypes: {
    handleChange: { action: 'characterAutocompleteChange' }
  }
} as Meta

export const Default: Story<CharacterAutocompleteProps> = args => (
  <div style={{ maxWidth: 500 }}>
    <CharacterAutocomplete {...args} />
  </div>
)
