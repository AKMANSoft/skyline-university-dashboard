import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

const CustomProductWraper = ({name, variant, img}) => {
  return (
    <Stack direction="row" alignItems="center" gap="8px">
    <Avatar
        alt={name}
        src={img?.src}
        sx={{ width: "38px", height: "38px" }}
    />
    <Box>
    <Typography
        variant="body2"
        sx={{ color: "#4B465C", fontWeight: 600, fontSize: "15px" }}
    >
        {name}
    </Typography>
    <Typography
        variant="body2"
        sx={{ color: "#4B465C", fontWeight: 400, fontSize: "13px", opacity: '0.7' }}
    >
        {variant}
    </Typography>
    </Box>
    </Stack>
  )
}

export default CustomProductWraper
