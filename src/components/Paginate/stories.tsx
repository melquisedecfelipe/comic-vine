import { Story, Meta } from '@storybook/react/types-6-0'

import Paginate, { PaginateProps } from '.'

export default {
  title: 'Paginate',
  component: Paginate,
  args: {
    page: 1,
    totalPages: 2
  },
  argTypes: {
    handlePage: { action: 'handlePageClick' }
  }
} as Meta

export const Default: Story<PaginateProps> = args => <Paginate {...args} />
