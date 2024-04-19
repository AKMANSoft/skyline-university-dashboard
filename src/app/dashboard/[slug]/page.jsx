import React from 'react'
import { Box, Stack, Grid, Link } from "@mui/material"
import Sidebar from '@/components/sidebar'
import { ContentBox } from '@/components/styles/Box'
import Appbar from '@/components/appbar'
import BreedCrumb from '@/components/mui/breedcrumbs'
import CompanyDetail from '@/components/companies/CompanyDetail'
import PostJobDetails from '@/components/companies/PostJobDetails'
import ProfileCard from '@/components/dashboard/ProfileCard'
import PostCard from '@/components/dashboard/PostCard'

const values = {
  title: "Profile Super Admin",
  links: [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ],
};

const Page = () => {
  return (
    <main>
      <Sidebar />
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
          <Box sx={{width: {md: '0px', lg:'260px'}}}></Box>
          <ContentBox sx={{width: {xs: '100%', md: '100%', lg: 'calc(100% - 260px)'}}}>
            <Appbar />
            
            <Grid sx={{width: '100%',mt:'90px', mb: '17px'}}>
              <BreedCrumb values={values} />
            </Grid>
            
            <Stack
              direction={{xs:'column-reverse',sm:'column-reverse',md:'row'}}
              gap='25px'
            >
              <ProfileCard />
              <PostCard />
            </Stack>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default Page
