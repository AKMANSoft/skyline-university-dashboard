'use client'
import React, { useState } from 'react'
import { Box, Grid, Stack, Typography, FormControl, NativeSelect, } from "@mui/material"
import styled from "@emotion/styled";
import bgImg from "@/assets/bg-dashboard.png"
import img from "@/assets/images/img6.png"
import useIcon from "@/assets/icons/uae.png"
import fliteIcon from "@/assets/icons/flite-icon.png"
import vectorImg from "@/assets/images/vector-img.png"
import { FiUsers } from "react-icons/fi";
import img2 from "@/assets/images/img7.png"
import Image from "next/image"
import ReactApexcharts from '@/components/react-apexcharts';
import { hexToRGBA } from '@/utils/hex-to-rgba';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';
import { DropdownIcon } from '@mui/icons-material';
import { ListIcon } from '@/utils/svg-icons';
import ActivityItem from '@/components/jobs-dashboard/ActivityItem';
import { activities } from '@/components/jobs-dashboard/ActivityData';

const currentYear = new Date().getFullYear();

const colors = Array(9).fill(hexToRGBA('#2C549E', 0.16))

const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        distributed: true,
        columnWidth: '35.8px',
        startingShape: 'rounded',
        dataLabels: { position: 'top' }
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: {
      offsetY: -30,
      formatter: val => `${val}`,
      style: {
        fontWeight: 500,
        colors: ['grey'],
        fontSize: '18px',
      }
    },
    colors,
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      show: false,
      padding: {
        top: 20,
        left: -5,
        right: -8,
        bottom: -12
      }
    },
    xaxis: {
      axisTicks: { show: false },
    //   axisBorder: { color: theme.palette.divider },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          colors: '#4B465C', //theme.palette.text.disabled,
        //   fontFamily:  '', //theme.typography.fontFamily,
          fontSize: '13px',  //theme.typography.body2.fontSize
        }
      }
    },
    yaxis: {
      labels: {
        offsetX: -15,
        formatter: val => `${val}`,
        style: {
            colors: '#4B465C', //theme.palette.text.disabled,
            //   fontFamily:  '', //theme.typography.fontFamily,
              fontSize: '13px'  //theme.typography.body2.fontSize
        }
      }
    },
    responsive: [
      {
        // breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: { columnWidth: '35.8px' }
          },
          grid: {
            padding: { right: 20 }
          }
        }
      }
    ]
  }

const tabData = [
{
    type: 'orders',
    series: [{ data: [22, 42, 16, 34, 58, 28, 36, 28, 52, 16, 28, 42] }]
}
]

const BackgroundImageGrid = styled(Grid)({
    width: '100%',
    height: '100%',
    background: `linear-gradient(72deg, #00318B 38.19%, #2C549E 95.26%), url(${bgImg.src}) lightgray 50% / cover no-repeat`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '30px',
    borderRadius: '10px',
    height: '251px',
    aspectRatio: '3.15',
    mixBlendMode: 'multiply',
  });

const Text = styled(Typography)({
    color: '#fff',
    fontWeight: 700,
    lineHeight: '22px',
})

const Text2 = styled(Typography)({
    color: '#4B465C',
    fontWeight: 700,
    lineHeight: '20px',
})

const Dashboard = () => {
    const [selectedYear, setSelectedYear] = useState(currentYear); // Default selected year is current year

  const handleYearChange = (date) => {
    setSelectedYear(date.getFullYear()); // Update selected year
  };
  return (
    <Grid xs={12} sx={{mt:'90px'}}>
      <Grid container columnGap="26px">
            <BackgroundImageGrid 
                item 
                xs={12}
                lg={12} 
                xl={5.7}
            >
                <Stack
                    direction='row'
                    gap='20px'
                >
                    <Box sx={{width: '60%'}}>
                        <Text sx={{fontSize: '18px'}}>
                            Overview
                        </Text>
                        <Text sx={{fontSize: '14px'}}>
                            Complete overview of job management
                        </Text>
                        <Stack direction='row' gap='15px' alignItems='center' sx={{mt: '18px'}}>
                            <Box
                                sx={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '50%',
                                    border: '4px solid #F7CA18',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#1A265C'
                                }}
                            >
                                <Text sx={{fontSize: '20px'}}>
                                    65
                                </Text>
                            </Box>
                            <Text sx={{fontSize: '15px'}}>
                                Total Job Posted
                            </Text>
                        </Stack>
                        <Box sx={{width: '100%', height: '1px', bgcolor: '#244E9B', mt: '26px', mb: '24px'}}></Box>
                        <Stack direction='row' gap='59px' alignItems='center'>
                            <Stack direction='row' gap='8px' alignItems='center'>
                                <Box
                                sx={{
                                    width: '48px',
                                    height: '30px',
                                    bgcolor: 'linear-gradient(0deg, #234D9A 0%, #234D9A 100%), #7367F0',
                                    borderRadius: '6px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#1A265C'
                                }}
                                >
                                <Text sx={{fontSize: '15px'}}>
                                    65
                                </Text>
                                </Box>
                                <Text sx={{fontSize: {xs: '14px', md: '12px', lg: '14px', xl:'15px'}}}>
                                Total Applicants
                                </Text>
                            </Stack>
                            <Stack direction='row' gap='8px' alignItems='center'>
                                <Box
                                sx={{
                                    width: '48px',
                                    height: '30px',
                                    bgcolor: 'linear-gradient(0deg, #234D9A 0%, #234D9A 100%), #7367F0',
                                    borderRadius: '6px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#1A265C'
                                }}
                                >
                                <Text sx={{fontSize: {xs: '14px', md: '12px', lg: '14px', xl:'15px'}}}>
                                    40
                                </Text>
                                </Box>
                                <Text sx={{fontSize: '15px'}}>
                                Total Shortlisted
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>

                    <Box
                    sx={{
                        width: '40%',
                        // aspectRatio: '1.576',
                        height: '100%',
                    }}
                    >
                        <Image
                            src={img}
                            style={{
                                width: '100%',
                                // height: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </Box>  
                </Stack>
            </BackgroundImageGrid>
            <Grid 
                item 
                xs={12} 
                lg={2.9}
                sx={{
                    boxShadow: '0px 2px 10px 0px rgba(76, 78, 100, 0.22)',
                    p: '20px',
                    borderRadius: '10px',
                    bgcolor: 'white',
                }}
            >
                <Text2 sx={{fontSize: '13px'}}>Total Companies</Text2>
                <Text2 sx={{fontSize: '22px', lineHeight: '30px!important'}}>210</Text2>
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{
                        mt: '26px',
                    }}
                >
                    <Box>
                        <Stack direction='row' gap='8px'>
                            <Image 
                                src={useIcon}
                            />
                            <Text2 sx={{fontSize: '15px', lineHeight: '22px'}}>In UAE</Text2>
                        </Stack>
                        <Text2 sx={{fontSize: '18px', mt: '11px', lineHeight: '24px'}}>
                            60%
                        </Text2>
                        <Text2 sx={{fontSize: '13px', mt: '11px', lineHeight: '24px'}}>
                        110
                        </Text2>
                    </Box>

                    <Stack direction='column' alignItems='center' gap='6px'>
                        <Box sx={{width: '1px', height: '31px', bgcolor: 'rgba(76, 78, 100, 0.12)'}}></Box>
                        <Box 
                            sx={{
                            width: '24px', 
                            height: '24px', 
                            borderRadius: '50%', 
                            bgcolor: 'rgba(76, 78, 100, 0.12)',
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
    
                        }}
                        >
                        <Text2 sx={{fontSize: '11px'}}>
                            VS
                        </Text2>
                        </Box>
                        <Box sx={{width: '1px', height: '31px', bgcolor: 'rgba(76, 78, 100, 0.12)'}}></Box>
                    </Stack>

                    <Box sx={{textAlign: 'end'}}>
                        <Stack direction='row' gap='8px'>
                            <Image 
                                src={fliteIcon}
                            />
                            <Text2 sx={{fontSize: '15px', lineHeight: '22px'}}>F Companies</Text2>
                        </Stack>
                        <Text2 sx={{fontSize: '18px', mt: '11px', lineHeight: '24px'}}>
                            40%
                        </Text2>
                        <Text2 sx={{fontSize: '13px', mt: '11px', lineHeight: '24px'}}>
                            100
                        </Text2>
                    </Box>

                </Stack>
                <Stack
                    direction='row'
                    sx={{
                        width: '100%',
                        height: '10px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        mt: '20px',
                    }}
                >
                    <Box
                        sx={{
                            width: '40%',
                            height: '100%',
                            bgcolor: '#00CFE8'
                        }}
                    ></Box>
                    <Box
                        sx={{
                            width: '60%',
                            height: '100%',
                            bgcolor: '#666CFF',
                        }}
                    ></Box>
                </Stack>
            </Grid>
            <Grid
                item 
                xs={12} 
                lg={2.9}
                sx={{
                    boxShadow: '0px 2px 10px 0px rgba(76, 78, 100, 0.22)',
                    p: '20px',
                    borderRadius: '10px',
                    position: 'relative',
                    bgcolor: 'white',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                    }}
                >
                    <Image 
                        src={vectorImg}
                    />
                </Box>
                <Stack direction='row' justifyContent='space-between' alignItems='start'>
                    <Box>
                        <Box
                            sx={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '50%',
                                bgcolor: '#F2F8EF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <FiUsers fontSize='22px' color="#7CBD5B" />
                        </Box>
                        <Text2 sx={{fontSize: '16px', lineHeight: '20px', mt: '5px'}}>Total Alumni's</Text2>
                        <Text2 sx={{fontSize: '25px', lineHeight: '20px', mt: '5px', color: '#7CBD5B !important', mt: '8px'}}>529</Text2>
                    </Box>
                    <Box>
                        <Image src={img2} />
                    </Box>
                </Stack>
            </Grid>
      </Grid>
      <Stack direction="row" columnGap="26px" sx={{mt: '26px'}}>
        <Box 
        sx={{
            boxShadow: '0px 2px 10px 0px rgba(76, 78, 100, 0.22)',
            p: '20px',
            borderRadius: '10px',
            bgcolor: 'white',
            width: '47.2%'
        }}
        >
            <Stack direction='row' justifyContent='space-between'>
                <Box>
                    <Typography
                    component='div'
                    variant='p'
                    sx={{
                        fontSize: '18px',
                        fontWeight: 700,
                        lineHeight: '24px',
                        color: '#4B465C'
                    }}
                    >
                        Jobs Analytics
                    </Typography>
                    <Typography
                    component='div'
                    variant='p'
                    sx={{
                        fontSize: '13px',
                        fontWeight: 700,
                        lineHeight: '20px',
                        color: 'var(--Light-Typography-Color-Muted-Text, #4B465C)'
                    }}
                    >
                        Jobs Posted Monthly
                    </Typography>
                </Box>
                <Box>
                 <DatePicker
                    views={['year']}
                    label="Select Year"
                    value={new Date(selectedYear, 0, 1)}
                    onChange={handleYearChange}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: <DropdownIcon />,
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ border: 'none', color: 'grey' }}
                        />
                    )}
                    />
                </Box>
            </Stack>
            {tabData.map((item, index) => {
                return (
                    <ReactApexcharts 
                        key={index} 
                        type='bar' 
                        height={299} 
                        options={{ ...options }} 
                        series={item.series} 
                    />
                )
            })}
        </Box>

        <Box
         sx={{
            boxShadow: '0px 2px 10px 0px rgba(76, 78, 100, 0.22)',
            p: '20px',
            borderRadius: '10px',
            bgcolor: 'white',
            width: '50%',
            maxHeight: '550px',
            overflow: 'auto'
         }}
        >
            <Stack
            direction='row' 
            gap="12px" 
            alignItems='center'
            >
                <ListIcon />
                <Typography
                variant='p'
                component='p'
                sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    lineHeight: '24px',
                    color: '#4B465C',
                    ml: '12px'
                }}>
                    Activity Timeline
                </Typography>
            </Stack>
            <Box 
             sx={{
                mt: '24px'  
            }}
            >
                {activities?.map((activity, index) => (
                    <ActivityItem key={index} isLastItem={index+1 === activities?.length} activity={activity} />
                ))}
            </Box>
        </Box>
      </Stack>
    </Grid>
  )
}

export default Dashboard
