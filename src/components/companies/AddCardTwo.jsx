'use client'
import { Stack, Box, Typography, TextField, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { AddCompanyCard } from '../styles/Card'
import styled from '@emotion/styled'
import { RiArrowDropDownLine } from 'react-icons/ri'
import CustomSelect from '../items/select/CustomSelect'

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

const styles = {
    maxWidth: '622px',
    color: '#4B465C',
    borderRadius: '6px',
}

const optionsCountry = [
    {label: "UAE", value: "UAE"}
]
const optionsState = [
    {label: "Sharjah", value: "Sharjah"}
]

const AddCardTwo = () => {

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
                    <CustomSelect 
                        placeholder="Select Status"
                        value="UAE"
                        options={optionsCountry}
                    />
                </Stack>
                <Stack 
                    direction={{xs: 'column', sm:'row'}} 
                    justifyContent='space-between' 
                    alignItems={{xs: 'start', sm:'center'}} 
                    sx={{ mt: '20px' }}
                >
                    <CustomLabel id="demo-simple-select-label" sx={{mb: {xs: '7px', sm: '0px'}}}>State</CustomLabel>
                    <CustomSelect 
                        placeholder="Select a State"
                        value="Sharjah"
                        options={optionsState}
                    />
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
