import React from 'react'
import { Box, Stack, Grid, Link } from "@mui/material"
import Sidebar from '@/components/sidebar'
import { ContentBox } from '@/components/styles/Box'
import Appbar from '@/components/appbar'
import BreedCrumb from '@/components/mui/breedcrumbs'
import CompanyDetail from '@/components/companies/CompanyDetail'
import PostJobDetails from '@/components/companies/PostJobDetails'

const values = {
  title: "Social Company",
  links: [
    {
      title: "Companies",
      path: "/companies",
    },
    {
        title: "Social Company",
        path: "/companies/social-company",
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
            
            <PostJobDetails />
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default Page
