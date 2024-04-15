import Appbar from '@/components/appbar'
import Sidebar from '@/components/sidebar'
import { ContentBox } from '@/components/styles/Box'
import List from '@/components/success-stories/List'
import { Box, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link'
import { BlueButton } from '@/components/styles/Buttons'

const SuccessStories = () => {
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
                    Success Story List
                </Typography>

                <Link href="/website-setup/success-stories/add">
                    <BlueButton variant="contained" sx={{textTransform: 'capitalize', bgcolor: '#00318B'}}>
                      <AddIcon sx={{color: 'white', fontSize: '22px', mr:1}} />  Add New Success Story
                    </BlueButton>
                </Link>
            </Stack>
            <List />
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default SuccessStories
