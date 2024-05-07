import React from 'react'
import { Box, Stack, Grid } from "@mui/material"
import { ContentBox } from '@/components/styles/Box'
import Appbar from '@/components/appbar'
import BreedCrumb from '@/components/mui/breedcrumbs'
import { BlueButton } from '@/components/styles/Buttons'
import AddIcon from '@mui/icons-material/Add';
import CardItem from '@/components/companies/CardItem'
import { companies } from '@/components/companies/StaticData'
import Link from 'next/link'

const values = {
  title: "List",
  links: [
    {
      title: "Companies",
      path: "/companies",
    },
  ],
};

const Companies = () => {
  return (
    <main>
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
          <Box sx={{width: {md: '0px', lg:'260px'}}}></Box>
          <ContentBox sx={{width: {xs: '100%', md: '100%', lg: 'calc(100% - 260px)'}}}>
            <Appbar />
            
            <Stack direction="row" justifyContent="space-between" sx={{width: '100%',mt:'90px', mb: '17px'}}>
              <BreedCrumb values={values} />
              
              <Link href="/add-company">
                <BlueButton variant="contained" sx={{textTransform: 'capitalize', bgcolor: '#00318B'}}>
                  <AddIcon sx={{color: 'white', fontSize: '22px', mr:1}} />  Add Company
                </BlueButton>
              </Link>
            </Stack>
            
            <Grid>
              <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)'},
                gridGap: '25px',
              }}
              >
                {companies?.map((company, index) => (
                <CardItem key={index} company={company} />
                ))}
              </Box>
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default Companies
