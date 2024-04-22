import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

const CustomListAvatar = ({name, img}) => {
  return (
    <Stack direction="row" alignItems="center" gap="8px">
    <Avatar
        alt={name}
        src={img.src}
        sx={{ width: "38px", height: "38px" }}
    />
    <Typography
        variant="body2"
        sx={{ color: "#6F6B7D", fontWeight: 500, fontSize: "15px" }}
    >
        {name}
    </Typography>
    </Stack>
  )
}

export default CustomListAvatar
