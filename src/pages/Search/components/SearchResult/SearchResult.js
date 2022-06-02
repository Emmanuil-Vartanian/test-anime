import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useDispatch, useSelector } from 'react-redux'

import { Animes, SearchResultContainer, Image, InfoBlock, HeartIcon, BtnBlock } from './style'

import Button from 'components/Button'
import MoreSvg from 'assets/svg/MoreSvg'
import { paginationSelector } from 'pages/Search/store/reducers/selectors'
import { likeAnime, setLikeAnimeToStore } from '../FavoriteAnime/store/actions'
import { likeAnimeSelector } from '../FavoriteAnime/store/reducers/selectors'
import { deleteLikeAnime } from 'services/deleteLikeAnime'

const SearchResult = ({ animes }) => {
  const dispatch = useDispatch()
  const { hasNextPage } = useSelector(paginationSelector)
  const likeAnimes = useSelector(likeAnimeSelector)

  const handleLikeAnime = anime => () => {
    if (findLikeAnime(anime.id)) {
      const newLickAnime = deleteLikeAnime(likeAnimes, anime)
      dispatch(setLikeAnimeToStore(newLickAnime))
    } else {
      dispatch(likeAnime(anime))
    }
  }

  const findLikeAnime = id => {
    const findAnime = likeAnimes.some(anime => anime.id === id)
    return findAnime
  }

  return (
    <>
      <Animes>
        {animes.map(({ id, coverImage, title }, index) => (
          <SearchResultContainer key={id}>
            <Image src={coverImage.large} alt={title.native} />
            <InfoBlock>
              <div>
                <div>{title.romaji}</div>
                <div>{title.native}</div>
              </div>
              <HeartIcon onClick={handleLikeAnime(animes[index])}>
                {findLikeAnime(id) ? (
                  <FavoriteIcon style={{ fill: 'red' }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </HeartIcon>
            </InfoBlock>
          </SearchResultContainer>
        ))}
      </Animes>
      {hasNextPage && (
        <BtnBlock>
          <Button variant="contained" type="submit">
            <span>MORE</span>
            <MoreSvg />
          </Button>
        </BtnBlock>
      )}
    </>
  )
}

export default SearchResult
