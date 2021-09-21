import { Story, Meta } from '@storybook/react/types-6-0'

import mockOptions from 'mock/options'

import SearchForm, { SearchFormProps } from '.'

export default {
  title: 'Form/SearchForm',
  component: SearchForm,
  args: {
    optionsCharacterAutocomplete: mockOptions
  },
  argTypes: {
    handleChange: { action: 'searchFormAutocompleteChange' },
    handleClear: { action: 'searchFormClear' },
    handleSubmit: { action: 'searchFormSubmit' }
  }
} as Meta

export const Default: Story<SearchFormProps> = args => <SearchForm {...args} />
