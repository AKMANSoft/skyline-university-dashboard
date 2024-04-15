import { Card, Stack, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import { CustomSwitch } from '../styles/Switch'
import { GoTrash } from "react-icons/go";
import { LuEye } from "react-icons/lu";
import ViewImgModal from './ViewImgModal';

const CardItem = ({item}) => {
    const[open, setOpen] = useState(false)
    const[currImg, setCurrImg] = useState('')
    const handleImgModal = () => {
        setOpen(!open)
    }
  return (
    <>
    <ViewImgModal 
        open={open}
        handleImgModal={handleImgModal}
        image={currImg}
    />
    <Card 
        sx={{
            width: '100%',
            maxWidth: '299px',
            aspectRatio: '0.86',
            p:{xs: '8px', md: '12px', lg: '14px', xl: '18px'},
            background: 'var(--Light-Solid-Color-Extra-Card-Background, #FFF)',
            boxShadow: '0px 4.117px 18.527px 0px rgba(75, 70, 92, 0.10)',
        }}
    >
        <Box
            sx={{
                width: '100%', 
                aspectRatio: "1.002", 
                position: "relative",
                '&:hover > div': {
                    display: 'flex',
                }
            }}
        >
            <Image
                style={{
                    width: "100%",
                    objectFit: 'cover',
                    aspectRatio: "1.002",
                }}
                src={item?.img} 
                layout="responsive"
            />

            <Box
                sx={{
                    position: 'absolute',
                    top: '22px',
                    left: '22px',
                    bottom: '22px',
                    right: '22px',
                    display: 'none',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: '#00318B',
                    opacity: '0.7',
                }}
            >
                <Stack direction="row" gap='20px'>
                    <GoTrash color='white' fontSize='22px' cursor='pointer' />
                    <LuEye 
                        color='white' 
                        fontSize='24px' 
                        cursor='pointer'
                        onClick={() => {
                            setCurrImg(item.img)
                            handleImgModal()
                        }} 
                    />
                </Stack>
            </Box>
        </Box>

        <Stack direction="row" justifyContent='space-between' alignItems="center" sx={{mt: '10px', maxHeight: '25px'}}>
            <Stack direction="row" >
                <Typography
                    variant='p'
                    component="p"
                    sx={{
                        color: '#4B465C',
                        fontSize: '0.8vw',
                        fontWeight: 400,
                        lineHeight: '24.703px',
                        mt:1
                    }}
                >
                    Posted on:
                </Typography>
                <Typography
                    variant='p'
                    component="p"
                    sx={{
                        color: '#4B465C',
                        fontSize: '0.8vw',
                        fontWeight: 400,
                        lineHeight: '24.703px',
                        mt:1
                    }}
                >
                    12/05/24
                </Typography>
            </Stack>
            <Stack direction="row" alignItems='center'>
                <Typography
                    variant='p'
                    component="p"
                    sx={{
                        color: '#4B465C',
                        fontSize: '0.8vw',
                        fontWeight: 400,
                        lineHeight: '28.703px',
                        mt:1
                    }}
                >
                    Status
                </Typography>
                <CustomSwitch 
                    label="Status"
                    defaultChecked
                />
            </Stack>
        </Stack>
    </Card>
    </>
  )
}

export default CardItem
