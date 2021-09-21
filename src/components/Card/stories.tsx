import { Story, Meta } from '@storybook/react/types-6-0'

import mockCharacter from 'mock/character'
import mockCharacters from 'mock/characters'

import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    character: mockCharacter,
    isVertical: false
  },
  argTypes: {
    handleAddFavorite: { action: 'addFavorite' },
    handleRemoveFavorite: { action: 'removeFavorite' }
  },
  parameters: {
    nextRouter: {
      path: '/character/[slug]',
      asPath: `/character/${mockCharacter.slug}`,
      query: {
        slug: mockCharacter.slug
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

IsVertical.args = {
  character: mockCharacters[0],
  isVertical: true
}
