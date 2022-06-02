import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-final-form'

import SearchForm from './components/SearchForm'
import SearchResult from './components/SearchResult'
import { contentSelector, paginationSelector, querySelector } from './store/reducers/selectors'
import { searchAnime, setPaginationToStore } from './store/actions'
import FavoriteAnime from './components/FavoriteAnime'
import { likeAnimeSelector } from './components/FavoriteAnime/store/reducers/selectors'
import useLoadingEffect from 'services/hooks/useLoadingEffect/useLoadingEffect'
import { EFFECT_LOADING } from 'constants/effectLoading'
import Loader from 'components/Loader'

const Search = () => {
  const dispatch = useDispatch()
  const animes = useSelector(contentSelector)
  const query = useSelector(querySelector)
  const pagination = useSelector(paginationSelector)
  const likeAnimes = useSelector(likeAnimeSelector)
  const searchAnimeLoader = useLoadingEffect(EFFECT_LOADING.SEARCH_ANIME)

  const handleFormSubmit = () => {
    dispatch(setPaginationToStore({ ...pagination, perPage: pagination.perPage + 3 }))
    dispatch(searchAnime(query))
  }

  return (
    <div>
      <Form
        onSubmit={handleFormSubmit}
        render={({ handleSubmit, form }) => (
          <form id={'search-form'} onSubmit={handleSubmit}>
            <SearchForm resetQuery={form.reset} />
            {!searchAnimeLoader ? (
              animes.length ? (
                <SearchResult animes={animes} />
              ) : null
            ) : (
              <Loader />
            )}
            {likeAnimes.length ? <FavoriteAnime likeAnimes={likeAnimes} /> : null}
          </form>
        )}
      />
    </div>
  )
}

export default Search
