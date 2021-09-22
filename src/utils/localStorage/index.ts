import { Character, CharacterEdit } from 'types/characters'

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(key)

  return JSON.parse(data!)
}

export function setStorageItem(
  key: string,
  value: string[] | Character[] | CharacterEdit
) {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)

  return window.localStorage.setItem(key, data)
}
