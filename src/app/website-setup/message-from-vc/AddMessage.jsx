import BreedCrumb from '@/components/mui/breedcrumbs'
import { BlueButton, ResetButton } from '@/components/styles/Buttons'
import { Card, Grid, Stack, Typography, Box, TextField, InputLabel } from '@mui/material'
import React from 'react'

const values = {
    title: 'Message From VC',
    links: [
        {
            title: "Website Setup",
            path: '/website-setup/success-stories'
        }
    ]
}

const AddMessage = () => {
  return (
    <Grid container spacing={6}>
        <Grid item xs={12}>
            <Card
            sx={{
                boxShadow: '0px 4px 18px 0px rgba(75, 70, 92, 0.10)',
                border: 'none',
                p: '24px'
            }}
            >
            <BreedCrumb values={values} />

            <Stack direction="row" gap="20px" sx={{mt: '27px'}}>
                <Box sx={{
                    width: '155px',
                    height: '149px',
                    borderRadius: '5px',
                    background: '#D9D9D9',
                }}>
                </Box>
                <Stack
                    direction="column"
                    justifyContent="end"
                    sx={{
                        height: '149px',
                    }}
                >
                    <Stack direction="row" sx={{mb: '10px'}}>
                        <BlueButton variant='contained' sx={{mr:'20px', bgcolor: '#00318B'}}>
                            Upload  Image*
                        </BlueButton>
                        <ResetButton variant='secondary'>
                            Reset
                        </ResetButton>
                    </Stack>
                    <Typography
                        variant='p'
                        sx={{
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '20px',
                            color: '#4B465C',
                            maxWidth: '332px',
                        }}
                    >
                        Allowed JPG, or PNG. Max size of 800K, Maximum width  440px , Maximum Hight 600px
                    </Typography>
                </Stack>
            </Stack>

            <Stack direction="row" gap='104px' sx={{mt: '30px'}}>
                <Box sx={{width: '100%', maxWidth: '450px'}}>
                    <InputLabel 
                        id="demo-simple-select-label"
                        sx={{
                            color: '#4B465C',
                            fontSize: '13px',
                            fontWeight: 400,
                            mb: '11px',
                            lineHeight: '19px'
                        }}
                    >
                        VC Name*
                    </InputLabel>
                    <TextField 
                        id="outlined-basic" 
                        placeholder="Michel Davies" 
                        variant="outlined" 
                        InputLabelProps={{
                            shrink: true
                        }}
                        sx={{
                            width: '100%',
                            height: '36px !important',
                        }}
                    />
                </Box>
                <Box sx={{width: '100%', maxWidth: '450px'}}>
                    <InputLabel 
                        id="demo-simple-select-label"
                        sx={{
                            color: '#4B465C',
                            fontSize: '13px',
                            fontWeight: 400,
                            mb: '11px',
                            lineHeight: '19px'
                        }}
                    >
                        Title*
                    </InputLabel>
                    <TextField 
                        id="outlined-basic" 
                        placeholder="enter here" 
                        variant="outlined" 
                        InputLabelProps={{
                            shrink: true
                        }}
                        sx={{
                            width: '100%',
                            height: '36px !important',
                        }}
                    />
                </Box>
            </Stack>
            </Card>
        </Grid>
    </Grid>
  )
}

export default AddMessage
