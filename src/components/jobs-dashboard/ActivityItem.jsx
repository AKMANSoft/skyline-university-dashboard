import React from 'react'
import { Stack, Box, Typography } from "@mui/material"
import styled from "@emotion/styled";

const Dot = styled(Box)({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    position: 'absolute',
    top: '4px',
    left: '-6px',
  });

  const BoxInner = styled(Box)({
    width: '100%',
    height: 'auto',
    minHeight: '75px',
    position: 'relative',
    paddingLeft: '26px',
  });

const ActivityItem = ({ activity, isLastItem }) => {
  return (
    <Box sx={{position: 'relative', borderLeft: `${isLastItem ? '' : '1px solid #DBDADE'}`}}>
        <Dot sx={{bgcolor: activity?.dotColor}} />
        <BoxInner>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Typography
                    component='div'
                    variant='p'
                    sx={{
                        fontSize: '15px',
                        color: 'var(--Light-Typography-Color-Heading-Text, #4B465C)',
                        fontWeight: 700,
                        lineHeight: '21px',
                        fontFamily: 'Public Sans'
                    }}
                >
                    {activity?.title}
                </Typography>
                <Typography
                    component='div'
                    variant='p'
                    sx={{
                        fontSize: '13px',
                        color: 'var(--Light-Typography-Color-Muted-Text, #4B465C)',
                        fontWeight: 700,
                        lineHeight: '20px',
                        opacity: '.7',
                        fontFamily: 'Public Sans'
                    }}
                >
                    {activity?.date}
                </Typography>
            </Stack>
            <Typography
                component='div'
                variant='p'
                sx={{
                    fontSize: '15px',
                    color: 'var(--Light-Typography-Color-Heading-Text, #4B465C)',
                    fontWeight: 700,
                    lineHeight: '21px',
                    fontFamily: 'Public Sans'
                }}
            >
                {activity?.text}
            </Typography>
        </BoxInner>
    </Box>
  )
}

export default ActivityItem
