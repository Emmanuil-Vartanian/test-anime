import styled from 'styled-components'
import TextField from '@mui/material/TextField'

export const TextFieldStyled = styled(TextField)`
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:disabled {
    cursor: not-allowed;
  }
  .Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border-color: #00cc99 !important;
    }
  }
`
