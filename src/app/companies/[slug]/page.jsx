import React from 'react'
import { Box, Stack, Grid, Link } from "@mui/material"
import Sidebar from '@/components/sidebar'
import { ContentBox } from '@/components/styles/Box'
import Appbar from '@/components/appbar'
import BreedCrumb from '@/components/mui/breedcrumbs'
import CompanyDetail from '@/components/companies/CompanyDetail'
import CompanyDetailCard from '@/components/companies/CompanyDetailCard'

const values = {
  title: "Social Company",
  links: [
    {
      title: "Companies",
      path: "/companies",
    },
  ],
};

const Page = () => {
  return (
    <main>
      {/* <Sidebar /> */}
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
          <Box sx={{width: {md: '0px', lg:'260px'}}}></Box>
          <ContentBox sx={{width: {xs: '100%', md: '100%', lg: 'calc(100% - 260px)'}}}>
            <Appbar />
            
            <Grid sx={{width: '100%',mt:'90px', mb: '17px'}}>
              <BreedCrumb values={values} />
            </Grid>

            <Grid container columnSpacing={{xs:2,sm:3}}>
              <Grid item xs={12} lg={4} sx={{display: {xs:'none',lg:'block'}}}>
              <CompanyDetailCard />
              </Grid>
              <Grid item xs={12} lg={8}>
                <CompanyDetail />
              </Grid>
              <Grid item xs={12} lg={4} sx={{display: {xs:'block',lg:'none'}, mt:'25px'}}>
              <CompanyDetailCard />
              </Grid>
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default Page
