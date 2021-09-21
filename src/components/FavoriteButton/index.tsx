import { useCallback, useMemo } from 'react'

import { Heart as HeartIcon } from '@styled-icons/boxicons-regular/Heart'
import { Heart as HeartFillIcon } from '@styled-icons/boxicons-solid/Heart'

import Button from 'components/Button'

import { useFavorite } from 'hooks/useFavorite'

import { Character } from 'types/characters'

export type FavoriteButtonProps = {
  character: Character
}

const FavoriteButton = ({ character }: FavoriteButtonProps) => {
  const { handleAddFavorite, handleRemoveFavorite, isFavorite } = useFavorite()

  const handleClick = useCallback(() => {
    isFavorite(character.id)
      ? handleRemoveFavorite(character.id)
      : handleAddFavorite(character)
  }, [character, handleAddFavorite, handleRemoveFavorite, isFavorite])

  const ariaLabel = useMemo(
    () => (isFavorite(character.id) ? 'Remove Favorite' : 'Add Favorite'),
    [character.id, isFavorite]
  )

  return (
    <Button aria-label={ariaLabel} onClick={() => handleClick()}>
      {isFavorite(character.id) ? <HeartFillIcon /> : <HeartIcon />}
    </Button>
  )
}

export default FavoriteButton
