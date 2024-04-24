'use client'
import React from 'react'
import img from "@/assets/icons/rc-icon5.png"
import { CustomCard } from '../styles/Card'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import styled from '@emotion/styled'

const CircleGreen = styled(Box)(({theme}) => ({
    width: '137px',
    height: '137px',
    borderRadius: '50%',
    backgroundColor:'#28C76F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
}))

const WhiteCircle = styled(Box)(({theme}) => ({
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor:'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}))

const GreyChip = styled(Box)(({theme}) => ({
    width: '100%',
    height: '9px',
    backgroundColor:'#D9E0EE',
    borderRadius: '0px 0px 5px 5px',
    position: 'absolute',
    right: 0,
    left: 0,
}))

const ShortlistedCard = () => {
  return (
    <CustomCard sx={{height: '251px', p: 0, position: 'relative'}}>
        <GreyChip sx={{top: 0}} />
        <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{height: '100%', p: '20px'}}>
            <Box>
                <Image alt='icon-image' src={img} />

                <Typography variant="body1" color="#4B465C" sx={{fontSize: '18px', fontWeight: 600, mt: '5px'}}>
                Shortlisted
                </Typography>
            </Box>

            <CircleGreen>
                <WhiteCircle>
                    <Typography variant="body1" color="#4B465C" sx={{fontSize: '22px', fontWeight: 800}}>
                    18
                    </Typography>
                    <Typography variant="body1" color="#28C76F" sx={{fontWeight: 400}}>
                    Total
                    </Typography>
                </WhiteCircle>
            </CircleGreen>
        </Stack>
        <GreyChip sx={{bottom: 0}} />
    </CustomCard>
  )
}

export default ShortlistedCard
