import Appbar from '@/components/appbar'
import Sidebar from '@/components/sidebar'
import { ContentBox } from '@/components/styles/Box'
import List from '@/components/success-stories/List'
import { Box, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link'

const SuccessStories = () => {
  return (
    <main>
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
                    Success Story List
                </Typography>

                <Link href="/website-setup/success-stories/add">
                    <Button 
                        variant="contained"
                        sx={{
                            color: 'white',
                            bgcolor: '#00318B',
                            height: '38px',
                            fontSize: '15px'
                        }}                    
                    >

                    <AddIcon sx={{color: 'white', fontSize: '22px', mr:1}} />  Add New Success Story
                    </Button>
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
