import CloseSvg from 'assets/svg/CloseSvg'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteLikeAnime } from 'services/deleteLikeAnime'
import { SearchTitle } from '../SearchForm/style'

import { Animes } from '../SearchResult/style'
import { FavoriteAnimeBlock, FavoriteAnimeContainer, Image, InfoBlock, BtnClose } from './style'

import { setLikeAnimeToStore } from './store/actions'

const FavoriteAnime = ({ likeAnimes }) => {
  const dispatch = useDispatch()

  const handleDeleteAnime = anime => () => {
    const newLickAnime = deleteLikeAnime(likeAnimes, anime)
    dispatch(setLikeAnimeToStore(newLickAnime))
  }

  return (
    <FavoriteAnimeBlock>
      <SearchTitle>Любимое аниме</SearchTitle>
      <Animes>
        {likeAnimes.map(({ id, coverImage, title }, index) => (
          <FavoriteAnimeContainer key={id}>
            <Image src={coverImage.large} alt={title.native} />
            <InfoBlock>
              <div>{title.romaji}</div>
              <BtnClose onClick={handleDeleteAnime(likeAnimes[index])}>
                <CloseSvg />
              </BtnClose>
            </InfoBlock>
          </FavoriteAnimeContainer>
        ))}
      </Animes>
    </FavoriteAnimeBlock>
  )
}

export default FavoriteAnime
