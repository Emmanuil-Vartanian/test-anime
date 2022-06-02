import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SearchFormContainer, SearchTitle, InputFieldStyled, BtnClose, Error } from './style'

import { resetSearch, searchAnime } from 'pages/Search/store/actions'
import CloseSvg from 'assets/svg/CloseSvg'
import { querySelector } from 'pages/Search/store/reducers/selectors'

const SearchForm = ({ resetQuery }) => {
  const dispatch = useDispatch()
  const query = useSelector(querySelector)
  const [error, setError] = useState('')

  const handleSearchAnime = e => {
    dispatch(searchAnime(e.target.value, errorApi))
    setError('')
  }

  const handleResetQuery = () => {
    resetQuery()
    dispatch(resetSearch())
    setError('')
  }

  const errorApi = error => {
    setError(error.message)
  }

  return (
    <SearchFormContainer>
      <SearchTitle>Список аниме</SearchTitle>
      <InputFieldStyled
        name="search"
        variant="outlined"
        placeholder="Text here"
        onHandleChange={handleSearchAnime}
        endAdornment={
          query && (
            <BtnClose onClick={handleResetQuery}>
              <CloseSvg />
            </BtnClose>
          )
        }
      />
      {error && <Error>{error}</Error>}
    </SearchFormContainer>
  )
}

export default SearchForm
