import { Story, Meta } from '@storybook/react/types-6-0'

import mock from './mock'

import CharacterForm, { CharacterFormProps } from '.'

export default {
  title: 'Form/CharacterForm',
  component: CharacterForm,
  args: {
    characterEdit: mock
  },
  argTypes: {
    handleSubmit: { action: 'handleSubmitClick' }
  }
} as Meta

export const Default: Story<CharacterFormProps> = args => (
  <CharacterForm {...args} />
)
