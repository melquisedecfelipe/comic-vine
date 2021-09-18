export type BBFCharacter = {
  aliases: string | null
  api_detail_url: string
  birth: string | null
  deck: string | null
  description: string
  id: number
  image: {
    icon_url: string
    screen_url: string
    small_url: string
  }
  name: string
  real_name: string
  origin: {
    name: string
  }
  publisher: {
    name: string
  }
  site_detail_url: string
}

export type BBFCharacterResponse = {
  results: BBFCharacter
}

export type BBFCharactersResponse = {
  limit: number
  offset: number
  number_of_total_results: number
  results: BBFCharacter[]
}

export type Character = {
  aliases: string | null
  detail: string
  birth: string | null
  deck: string | null
  description: string
  id: number
  images: {
    icon: string
    screen: string
    small: string
  }
  name: string
  realName: string
  site: string
  slug: string
}

export type CharacterDetail = {
  origin: string
  publisher: string
} & Character

export type CharacterResponse = {
  results: Character
}

export type CharactersResponse = {
  limit: number
  offset: number
  total: number
  totalPages: number
  results: Character[]
}
