import { TextField } from '@mui/material'
import React from 'react'

const TextFieldDate = (props) => {
  return (
    <TextField
        id="outlined-basic"
        placeholder={props?.placeholder}
        variant="outlined"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          sx: {
            height: "38px !important",
            fontSize: '12px',
          },
        }}
        sx={{
            padding: '0px',
          width: "35%",
          borderRadius: "6px",
        }}
      />
  )
}

export default TextFieldDate
