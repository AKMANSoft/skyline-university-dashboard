'use client'
import { Stack, Box, Typography, TextField, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { AddCompanyCard } from '../styles/Card'
import styled from '@emotion/styled'

const styles = {
    maxWidth: '622px',
    color: '#4B465C',
    borderRadius: '6px',
}

const AddCardTwo = () => {

    const CardTitle = styled(Typography)(({ theme }) => ({
        fontSize: '18px',
        fontFeatureSettings: "'clig' off, 'liga' off",
        fontWeight: 600,
        lineHeight: '30px', 
        color: '#4B465C'
    }))

    const CustomLabel = styled(InputLabel)(({ theme }) => ({
        fontSize: '16px',
        fontFeatureSettings: "'clig' off, 'liga' off",
        fontWeight: 400,
        color: '#4B465C'
    }))

  return (
    <AddCompanyCard sx={{padding: '20px', width: {sm: '100%', md: '50%'}}}>
        <CardTitle>
        Contact Information
        </CardTitle>
        
          <Box sx={{mt: '22px'}}>
            <form>
                <Stack
                    direction={{xs: 'column', sm:'row'}} 
                    justifyContent='space-between' 
                    alignItems={{xs: 'start', sm:'center'}} 
                    sx={{ mt: '20px' }}
                >
                    <CustomLabel id="demo-simple-select-label" sx={{mb: {xs: '7px', sm: '0px'}}}>
                    Email Address
                    </CustomLabel>
                    <TextField
                        id="outlined-basic"
                        placeholder="John"
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        InputProps={{
                        sx: {
                            height: "38px !important",
                        },
                        }}
                        sx={{...styles, width: {xs:'100%', sm: '70%', lg: '75%', xl: "82%"}}}
                    />
                </Stack>
                <Stack
                    direction={{xs: 'column', sm:'row'}} 
                    justifyContent='space-between' 
                    alignItems={{xs: 'start', sm:'center'}} 
                    sx={{ mt: '20px' }}
                >
                    <CustomLabel id="demo-simple-select-label" sx={{mb: {xs: '7px', sm: '0px'}}}>
                    Phone No
                    </CustomLabel>
                    <TextField
                        id="outlined-basic"
                        placeholder="Matt"
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        InputProps={{
                        sx: {
                            height: "38px !important",
                        },
                        }}
                        sx={{...styles, width: {xs:'100%', sm: '70%', lg: '75%', xl: "82%"}}}
                    />
                </Stack>
                <Stack
                    direction={{xs: 'column', sm:'row'}} 
                    justifyContent='space-between' 
                    alignItems={{xs: 'start', sm:'center'}} 
                    sx={{ mt: '20px' }}
                >
                    <CustomLabel id="demo-simple-select-label" sx={{mb: {xs: '7px', sm: '0px'}}}>
                    Description
                    </CustomLabel>
                    <TextField
                        id="outlined-basic"
                        placeholder="Description will come here this is an example description"
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        InputProps={{
                        sx: {
                            height: "38px !important",
                        },
                        }}
                        sx={{...styles, width: {xs:'100%', sm: '70%', lg: '75%', xl: "82%"}}}
                    />
                </Stack>
                <Stack
                    direction={{xs: 'column', sm:'row'}} 
                    justifyContent='space-between' 
                    alignItems={{xs: 'start', sm:'center'}} 
                    sx={{ mt: '20px' }}
                >
                    <CustomLabel id="demo-simple-select-label" sx={{mb: {xs: '7px', sm: '0px'}}}>Country</CustomLabel>
                    <Select
                        id="outlined-basic"
                        placeholder="Select a Country"
                        variant="outlined"
                        value='UAE'
                        disabled
                        sx={{
                            width: {xs:'100%', sm: '70%', lg: '75%', xl: "82%"},
                            maxWidth: '622px',
                            height: '38px',
                            borderRadius: '6px',
                            color: '#4B465C',
                            '& .MuiOutlinedInput-notchedOutline': {
                                // borderColor: '#DBDADE',
                            },
                            '& .MuiSelect-root': {
                                color: '#4B465C',
                            },
                        }}
                    >
                        <MenuItem value="UAE" selected>UAE</MenuItem>
                        <MenuItem value="KSA">KSA</MenuItem>
                    </Select>
                </Stack>
                <Stack 
                    direction={{xs: 'column', sm:'row'}} 
                    justifyContent='space-between' 
                    alignItems={{xs: 'start', sm:'center'}} 
                    sx={{ mt: '20px' }}
                >
                    <CustomLabel id="demo-simple-select-label" sx={{mb: {xs: '7px', sm: '0px'}}}>State</CustomLabel>
                    <Select
                        id="outlined-basic"
                        placeholder="Select a State"
                        variant="outlined"
                        value="Sharjah"
                        disabled
                        sx={{
                            width: {xs:'100%', sm: '70%', lg: '75%', xl: "82%"},
                            maxWidth: '622px',
                            height: '38px',
                            borderRadius: '6px',
                            color: '#4B465C',
                            '& .MuiOutlinedInput-notchedOutline': {
                                // borderColor: '#DBDADE',
                            },
                            '& .MuiSelect-root': {
                                color: '#757575',
                            },
                        }}
                    >
                        <MenuItem value="Sharjah" selected>Sharjah</MenuItem>
                    </Select>
                </Stack>
                <Stack 
                    direction={{xs: 'column', sm:'row'}} 
                    justifyContent='space-between' 
                    alignItems={{xs: 'start', sm:'center'}} 
                    sx={{ mt: '20px' }}
                >
                    <CustomLabel id="demo-simple-select-label" sx={{mb: {xs: '7px', sm: '0px'}}}>
                    Address
                    </CustomLabel>
                    <TextField
                        id="outlined-basic"
                        placeholder="dummy address #3 street, town, City"
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        InputProps={{
                        sx: {
                            height: "38px !important",
                        },
                        }}
                        sx={{...styles, width: {xs:'100%', sm: '70%', lg: '75%', xl: "82%"}}}
                    />
                </Stack>
            </form>
          </Box>
    </AddCompanyCard>
  )
}

export default AddCardTwo
