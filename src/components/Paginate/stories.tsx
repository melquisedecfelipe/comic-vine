import { Story, Meta } from '@storybook/react/types-6-0'

import Paginate, { PaginateProps } from '.'

export default {
  title: 'Paginate',
  component: Paginate,
  args: {
    page: 2,
    totalPages: 3
  },
  argTypes: {
    handlePage: { action: 'handlePageClick' }
  }
} as Meta

export const Default: Story<PaginateProps> = args => <Paginate {...args} />
