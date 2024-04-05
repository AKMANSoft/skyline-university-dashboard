import React from 'react'
import { Box, Stack, Typography, Card, Grid, Link } from "@mui/material"
import Image from 'next/image';
import img from "@/assets/images/img4.png"
import { BsThreeDotsVertical } from "react-icons/bs";
import { CustomSwitch } from '@/components/styles/Switch';

const MessageList = () => {
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
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xl: 'repeat(4, 1fr)',
                        lg: 'repeat(3, 1fr)',
                        md: 'repeat(2, 1fr)',
                        sm: 'repeat(1, 1fr)',
                    },
                    gap: '14px'
                }}
            >
                <Card
                    sx={{
                        boxShadow: '0px 4.474px 20.133px 0px rgba(75, 70, 92, 0.10)',
                        width: '100%',
                        minWidth: '387px',
                        height: '482px',
                        px: '18px',
                        py: '15px',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '227px',
                        }}
                    >
                        <Image 
                            src={img}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                    <Stack direction='row' sx={{mt: '17px', mb: '10px'}}>
                        <Box sx={{width: '85%'}}>
                            <Link href="/website-setup/message-from-vc/read-more" sx={{textDecoration: 'none'}}>
                                <Typography variant="p" 
                                sx={{
                                    color: '#4E4E4E',
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    lineHeight: '25px',
                                    letterSpacing: '1px',
                                    textTransform: 'capitalize',
                                }}
                                >
                                    Welcome to Skyline University 
                                    College (SUC) in Sharjah.
                                </Typography>
                            </Link>
                        </Box>
                        <Box
                        sx={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'end',
                            cursor: 'pointer',
                        }}
                        >
                            <BsThreeDotsVertical fontSize='25px' />
                        </Box>
                    </Stack>
                    <Typography variant="p" 
                        sx={{
                            color: '#797979',
                            fontSize: '15px',
                            fontWeight: 400,
                            lineHeight: '22px',
                            textTransform: 'capitalize',
                        }}
                    >
                        In preparation to upgrade its status into a fully-fledged university, SUC has recently diversified by the inception of its new School of Information Technology. Both of SUCs...
                    </Typography>
                    <Box sx={{width: '100%', height: '1.1px', mt:'17px', mb: '10px', bgcolor: '#000', opacity: '0.2'}}></Box>
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
            </Box>
        </Card>
        </Grid>
    </Grid>
  )
}

export default MessageList
