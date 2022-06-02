import InputField from 'components/FormFields/InputField'
import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`

export const SearchTitle = styled.div`
  color: #00cc99;
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  margin-bottom: 25px;
  text-align: center;
`

export const InputFieldStyled = styled(InputField)`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  input {
    border-radius: 5px;
  }
  fieldset {
    border-color: #fff;
    border-radius: 5px;
  }
  svg {
    cursor: pointer;
  }
`

export const BtnClose = styled.div`
  height: 26px;
`

export const Error = styled.div`
  color: red;
  margin-top: 30px;
  text-align: center;
`
