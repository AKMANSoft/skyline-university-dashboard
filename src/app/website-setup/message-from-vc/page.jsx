import Appbar from '@/components/appbar'
import Sidebar from '@/components/sidebar'
import { ContentBox } from '@/components/styles/Box'
import { Box, Stack } from "@mui/material"
import React from 'react'
import AddMessage from './AddMessage'

const page = () => {
  if (typeof document === 'undefined') {
    return null; // Render nothing during server-side rendering
}
  return (
    <main>
      <Sidebar />
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
          <Box sx={{width: '260px'}}></Box>
          <ContentBox>
            <Appbar />
            <AddMessage />
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default page
