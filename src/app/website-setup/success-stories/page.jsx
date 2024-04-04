import Appbar from '@/components/appbar'
import Sidebar from '@/components/sidebar'
import { ContentBox } from '@/components/styles/Box'
import List from '@/components/success-stories/List'
import { Box, Stack } from '@mui/material'
import React from 'react'

const SuccessStories = () => {
  return (
    <main>
      <Sidebar />
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
          <Box sx={{width: '260px'}}></Box>
          <ContentBox

          >
            <Appbar />
            <List />
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default SuccessStories
