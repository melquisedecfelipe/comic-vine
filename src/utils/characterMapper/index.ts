import { slugify } from 'utils/slugify'

import { BBFCharacter, Character, CharacterDetail } from 'types/characters'

export const characterMapper = (character: BBFCharacter): CharacterDetail => {
  return {
    aliases: character.aliases,
    detail: character.api_detail_url,
    birth: character.birth,
    id: character.id,
    images: {
      icon: character.image.icon_url,
      screen: character.image.screen_url,
      small: character.image.small_url
    },
    name: character.name,
    realName: character.real_name,
    deck: character.deck,
    description: character.description,
    origin: character.origin.name,
    publisher: character.publisher.name,
    site: character.site_detail_url,
    slug: slugify(character.id, character.name)
  }
}

export const charactersMapper = (characters: BBFCharacter[]): Character[] => {
  return characters.map(character => ({
    aliases: character.aliases,
    detail: character.api_detail_url,
    birth: character.birth,
    id: character.id,
    images: {
      icon: character.image.icon_url,
      screen: character.image.screen_url,
      small: character.image.small_url
    },
    name: character.name,
    realName: character.real_name,
    deck: character.deck,
    description: character.description,
    site: character.site_detail_url,
    slug: slugify(character.id, character.name)
  }))
}
