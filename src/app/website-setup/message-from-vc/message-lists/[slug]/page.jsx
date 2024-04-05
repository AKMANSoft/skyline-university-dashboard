import Sidebar from '@/components/sidebar'
import React from 'react'
import { Box, Stack } from "@mui/material"
import Appbar from '@/components/appbar'
import { ContentBox } from '@/components/styles/Box'
import { BlueButton } from '@/components/styles/Buttons'
import BreedCrumb from '@/components/mui/breedcrumbs'
import ReadMore from './ReadMoreText'

const values = {
    title: 'Read More',
    links: [
        {
            title: "Message From VC",
            path: '/website-setup/message-from-vc'
        }
    ]
}


const page = () => {
  return (
    <main>
      <Sidebar />
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
          <Box sx={{width: '260px'}}></Box>
          <ContentBox>
            <Appbar />
            
            <Stack direction="row" justifyContent="space-between" sx={{width: '100%',mt:'90px', mb: '17px'}}>
                <BreedCrumb values={values} />

                <Box>
                    <BlueButton 
                    variant="outlined" 
                    sx={{
                        textTransform: 'capitalize', 
                        border: '1px solid #00318B',
                        mr:'20px',
                        color: '#00318B !important'
                    }}
                    >
                    Delete
                    </BlueButton>
                    <BlueButton 
                    variant="contained" 
                    sx={{
                        textTransform: 'capitalize', 
                        bgcolor: '#00318B',
                    }}
                    >
                    Edit
                    </BlueButton>
                </Box>
            </Stack>
            <ReadMore />
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default page
