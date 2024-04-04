import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

const BreedCrumb = ({values}) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
        {values?.links?.map((link, index) => (
            <Link
                key={index}
                underline="hover"
                color="inherit"
                href={link?.path}
            >
                {link?.title}
            </Link>
        ))}
        <Typography variant='p' color="text.primary">{values?.title}</Typography>
    </Breadcrumbs>
  )
}

export default BreedCrumb
