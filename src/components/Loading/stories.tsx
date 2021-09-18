import { Story, Meta } from '@storybook/react/types-6-0'

import Loading, { LoadingProps } from '.'

export default {
  title: 'Loading',
  component: Loading
} as Meta

export const Default: Story<LoadingProps> = args => <Loading {...args} />

export const asFullPage: Story = args => <Loading {...args} />

asFullPage.args = {
  isFullPage: true
}
