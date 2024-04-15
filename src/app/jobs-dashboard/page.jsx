import Appbar from '@/components/appbar'
import Sidebar from '@/components/sidebar'
import { ContentBox } from '@/components/styles/Box'
import List from '@/components/success-stories/List'
import { Box, Stack } from '@mui/material'
import React from 'react'
import Dashboard from './Dashboard'

const Page = () => {
  return (
    <main>
      <Sidebar />
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
         <Box sx={{width: {md: '0px', lg:'260px'}}}></Box>
          <ContentBox sx={{width: {xs: '100%', md: '100%', lg: 'calc(100% - 260px)'}}}>
            <Appbar />
            <Dashboard />
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default Page
