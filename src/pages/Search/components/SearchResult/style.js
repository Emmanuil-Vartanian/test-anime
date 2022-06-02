import styled from 'styled-components'

export const Animes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 35px;
  row-gap: 15px;
  margin: 32px 0px 16px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const SearchResultContainer = styled.div`
  max-width: 373px;
  width: 100%;
  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  height: 179px;
  width: 100%;
  object-fit: cover;
  display: block;
`

export const InfoBlock = styled.div`
  padding: 18px;
  font-family: 'Montserrat';
  line-height: 28px;
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div:first-child {
    font-weight: 700;
  }
`

export const HeartIcon = styled.div`
  display: flex;
  justify-content: end;
  > svg {
    cursor: pointer;
  }
`

export const BtnBlock = styled.div`
  display: flex;
  justify-content: center;
  > button > svg {
    margin-left: 20px;
  }
`
