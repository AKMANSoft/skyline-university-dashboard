import Appbar from '@/components/appbar'
import { ContentBox } from '@/components/styles/Box'
import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import AddStory from './addStory'

const page = () => {
  return (
    <main>
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
         <Box sx={{width: {md: '0px', lg:'260px'}}}></Box>
          <ContentBox>
            <Appbar />
            <Grid xs={12}>
              <AddStory />
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default page
