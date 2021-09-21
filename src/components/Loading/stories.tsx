import { Story, Meta } from '@storybook/react/types-6-0'

import Loading, { LoadingProps } from '.'

export default {
  title: 'Loading',
  component: Loading,
  args: {
    isFullPage: false
  }
} as Meta

export const Default: Story<LoadingProps> = args => <Loading {...args} />
