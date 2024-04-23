import Appbar from '@/components/appbar'
import GraphCard from '@/components/company-dashboard/GraphCard'
import OverviewCard from '@/components/company-dashboard/OverviewCard'
import TimelineCard from '@/components/company-dashboard/TimelineCard'
import Sidebar from '@/components/sidebar'
import { ContentBox } from '@/components/styles/Box'
import { Box, Grid, Stack } from '@mui/material'
import React from 'react'

const Page = () => {
  return (
    <main>
      <Sidebar />
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
         <Box sx={{width: {md: '0px', lg:'260px'}}}></Box>
          <ContentBox sx={{width: {xs: '100%', md: '100%', lg: 'calc(100% - 260px)'}}}>
            <Appbar />
            <Grid container columnSpacing={3} sx={{mt: '90px'}}>
              <Grid item xs={12} lg={6}>
                <OverviewCard />
                <GraphCard />
              </Grid>
              <Grid item xs={12} lg={6}>
              <TimelineCard />
              </Grid>
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default Page
