'use client'
import { Stack, Box, Typography, TextField, InputLabel, MenuItem, Select, TextareaAutosize } from '@mui/material'
import React from 'react'
import { AddCompanyCard } from '../styles/Card'
import styled from '@emotion/styled'
import { BsUpload } from "react-icons/bs";
import { BlueButton } from '../styles/Buttons'

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
                        placeholder="John@gmail.com"
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
                        placeholder="000 0000 0000"
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
                    Country
                    </CustomLabel>
                    <Select
                        id="outlined-basic"
                        placeholder="Select Status"
                        variant="outlined"
                        value="UAE"
                        sx={{
                        width: { xs: "100%", sm: "70%", lg: "75%", xl: "82%" },
                        height: "38px",
                        borderRadius: "6px",
                        color: "#757575",
                        borderColor: '#DBDADE',
                        bgcolor: '#F6F6F6',
                        "& .MuiSelect-root": {
                            color: "#757575",
                        },
                        }}
                    >
                        <MenuItem value="UAE">UAE</MenuItem>
                    </Select>
                </Stack>
                <Stack
                    direction={{xs: 'column', sm:'row'}} 
                    justifyContent='space-between' 
                    alignItems={{xs: 'start', sm:'center'}} 
                    sx={{ mt: '20px' }}
                >
                    <CustomLabel id="demo-simple-select-label" sx={{mb: {xs: '7px', sm: '0px'}}}>
                    State
                    </CustomLabel>
                    <Select
                        id="outlined-basic"
                        placeholder="Select Status"
                        variant="outlined"
                        value="Sharjah"
                        sx={{
                        width: { xs: "100%", sm: "70%", lg: "75%", xl: "82%" },
                        height: "38px",
                        borderRadius: "6px",
                        color: "#757575",
                        borderColor: '#DBDADE',
                        bgcolor: '#F6F6F6',
                        "& .MuiSelect-root": {
                            color: "#757575",
                        },
                        }}
                    >
                        <MenuItem value="Sharjah">Sharjah</MenuItem>
                    </Select>
                </Stack>
                <Stack
                    direction={{xs: 'column', sm:'row'}} 
                    justifyContent='space-between' 
                    alignItems="start" 
                    sx={{ mt: '20px' }}
                >
                    <CustomLabel id="demo-simple-select-label" sx={{mb: {xs: '7px', sm: '0px'}}}>
                    Description
                    </CustomLabel>
                    <Box
                        sx={{
                            width: { xs: "100%", sm: "70%", lg: "75%", xl: "82%" },
                            height: "101px",
                        }}
                    >
                        <TextareaAutosize
                            id="outlined-basic"
                            placeholder="dummy address #3 street, town, City"
                            style={{ 
                                width: "95.5%",
                                height: '101px', 
                                resize: 'vertical' ,
                                borderRadius: '6px',
                                borderColor: '#DBDADE',
                                padding:"12px",
                                fontSize: '16px',
                                fontFamily: 'sans-serif',
                                marginBottom: '20px'
                            }}
                        />
                    </Box>
                </Stack>
            </form>
          </Box>

          <Stack direction='row' alignItems='center' gap='19px' sx={{mt: '41px'}}>
                <Box
                    sx={{
                        width: '81px',
                        height: '73px',
                        bgcolor: 'rgba(46, 49, 146, 0.17)',
                        borderRadius: '6px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <BsUpload color='#2E3192' fontSize='40px' />
                </Box>
                <BlueButton sx={{bgcolor: '#2E3192', "&:hover": {
                    bgcolor: '#2E3192',
                }}}>
                    Upload Resume
                </BlueButton>
          </Stack>
    </AddCompanyCard>
  )
}

export default AddCardTwo
