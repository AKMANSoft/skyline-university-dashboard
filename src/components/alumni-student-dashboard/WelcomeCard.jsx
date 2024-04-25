'use client'
import React from 'react'
import { CustomCard } from '../styles/Card'
import styled from '@emotion/styled'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import img1 from "@/assets/images/vector-img.png"
import img2 from "@/assets/images/group.png"

const AbsoluteBox1 = styled(Box)(({theme}) => ({
    position: 'absolute',
    top: '-10px',
    right: '-15px',
    bottom: '-15px',
    zIndex: 0,
}))

const AbsoluteBox2 = styled(Box)(({theme}) => ({
    position: 'absolute',
    left: '0',
    bottom: '-6px',
    zIndex: 0,
}))

const WelcomeCard = () => {
  return (
    <CustomCard sx={{position: 'relative', height: '251px', p:0}}>
        <AbsoluteBox1>
            <Image
                src={img2}
                alt='img'
                style={{height: '100%'}}
            />
        </AbsoluteBox1>
        <AbsoluteBox2>
            <Image 
                src={img1}
                alt='img'
            />
        </AbsoluteBox2>
        <Box 
        sx={{
            width: {xs:'80%',sm:'70%'},
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            p:'30px'
        }}
        >
            <Stack direction='row' gap="4px">
                <Typography variant="body1" color="#373737" sx={{fontSize: {xs:'16px',sm:'30px'}, fontWeight: 400}}>
                    Welcome Back
                </Typography>
                <Typography variant="body1" color="#03348C" sx={{fontSize: {xs:'16px',sm:'30px'}, fontWeight: 700}}>
                    Jimmy James!
                </Typography>
            </Stack>
            <Typography variant="body1" color="#373737" sx={{fontWeight: 300, mt: '12px'}}>
            Best of Luck Jimmy, Hope you will get a Job Soon
            </Typography>
        </Box>
    </CustomCard>
  )
}

export default WelcomeCard
