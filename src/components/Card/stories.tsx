import { Story, Meta } from '@storybook/react/types-6-0'

import Card, { CardProps } from '.'
import mock from './mock'

export default {
  title: 'Card',
  component: Card,
  args: mock,
  parameters: {
    nextRouter: {
      path: '/character/[slug]',
      asPath: `/character/${mock.href}`,
      query: {
        slug: mock.href
      }
    }
  }
} as Meta

export const Default: Story<CardProps> = args => (
  <div style={{ maxWidth: 500 }}>
    <Card {...args} />
  </div>
)
