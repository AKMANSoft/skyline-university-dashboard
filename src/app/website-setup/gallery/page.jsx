'use client'
import Appbar from '@/components/appbar'
import Sidebar from '@/components/sidebar'
import { ContentBox } from '@/components/styles/Box'
import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Link from 'next/link'
import { BlueButton } from '@/components/styles/Buttons'
import Gallery from '@/components/gallery/Gallery'
import AddNewModal from './AddNewModal'

const Page = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <main>
      <AddNewModal 
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
      />

      <Sidebar />
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
          <Box sx={{width: '260px'}}></Box>
          <ContentBox

          >
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
                    Gallery
                </Typography>

                <BlueButton 
                  variant="contained" 
                  sx={{
                    textTransform: 'capitalize', 
                    bgcolor: '#00318B'
                  }}
                  onClick={handleOpen}
                >
                  Add New
                </BlueButton>
            </Stack>
            <Gallery />
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default Page
