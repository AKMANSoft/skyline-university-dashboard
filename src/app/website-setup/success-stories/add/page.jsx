import Appbar from '@/components/appbar'
import BreedCrumb from '@/components/mui/breedcrumbs'
import Sidebar from '@/components/sidebar'
import { ContentBox } from '@/components/styles/Box'
import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <main>
      <Sidebar />
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
          <Box sx={{width: '260px'}}></Box>
          <ContentBox

          >
            <Appbar />
            <addStory />
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default page
