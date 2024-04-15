import Sidebar from '@/components/sidebar'
import React from 'react'
import { Box, Stack, Typography, Card, Grid } from "@mui/material"
import Appbar from '@/components/appbar'
import { ContentBox } from '@/components/styles/Box'
import { BlueButton } from '@/components/styles/Buttons'
import MessageList from './MessageList'

const page = () => {
  return (
    <main>
      <Sidebar />
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
         <Box sx={{width: {md: '0px', lg:'260px'}}}></Box>
          <ContentBox sx={{width: {xs: '100%', md: '100%', lg: 'calc(100% - 260px)'}}}>
            <Appbar />
            
            <Stack direction="row" justifyContent="space-between" sx={{width: '100%',mt:'90px', mb: '17px'}}>
                <Typography
                    component='p'
                    variant='p'
                    sx={{
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#4B465C',
                        lineHeight: '30px',
                    }}
                >
                    Message-From-VC
                </Typography>

                <BlueButton 
                  variant="contained" 
                  sx={{
                    textTransform: 'capitalize', 
                    bgcolor: '#00318B'
                  }}
                >
                  Add New
                </BlueButton>
            </Stack>
            <MessageList />
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default page
