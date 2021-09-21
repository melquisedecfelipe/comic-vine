import { Story, Meta } from '@storybook/react/types-6-0'

import CharacterAutocomplete, { CharacterAutocompleteProps } from '.'
import mock from './mock'

export default {
  title: 'Form/CharacterAutocomplete',
  component: CharacterAutocomplete,
  args: {
    initialValue: '',
    options: mock.options
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
