import mock from 'components/CharacterAutocomplete/mock'

import { Story, Meta } from '@storybook/react/types-6-0'

import SearchForm, { SearchFormProps } from '.'

export default {
  title: 'Form/SearchForm',
  component: SearchForm
} as Meta

export const Default: Story<SearchFormProps> = args => <SearchForm {...args} />

Default.args = {
  optionsCharacterAutocomplete: mock.options
}
