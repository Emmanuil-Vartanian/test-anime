import styled from 'styled-components'

export const FavoriteAnimeBlock = styled.div`
  margin-top: 30px;
`

export const FavoriteAnimeContainer = styled.div`
  max-width: 361px;
  width: 100%;
  height: 217px;
  text-align: center;
  background: #fff;
  display: flex;
`

export const Image = styled.img`
  height: 100%;
  width: 114px;
  object-fit: cover;
  display: block;
`

export const InfoBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 29px 12px 12px 0px;
  font-family: 'Montserrat';
  line-height: 28px;
  > div:first-child {
    font-weight: 700;
  }
`

export const BtnClose = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
`
