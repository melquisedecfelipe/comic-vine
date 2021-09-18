import { Story, Meta } from '@storybook/react/types-6-0'

import CharacterAutocomplete from '.'

export default {
  title: 'Form/CharacterAutocomplete',
  component: CharacterAutocomplete
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: 500 }}>
    <CharacterAutocomplete />
  </div>
)
