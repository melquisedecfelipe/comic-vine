import { Story, Meta } from '@storybook/react/types-6-0'

import Card, { CardProps } from '.'
import mock from './mock'

export default {
  title: 'Card',
  component: Card,
  args: { ...mock },
  argTypes: {
    handleAddFavorite: { action: 'addFavorite' },
    handleRemoveFavorite: { action: 'removeFavorite' }
  },
  parameters: {
    nextRouter: {
      path: '/character/[slug]',
      asPath: `/character/${mock.character.slug}`,
      query: {
        slug: mock.character.slug
      }
    }
  }
} as Meta

export const Default: Story<CardProps> = args => (
  <div style={{ maxWidth: 500 }}>
    <Card {...args} />
  </div>
)

export const IsVertical: Story<CardProps> = args => <Card {...args} />
