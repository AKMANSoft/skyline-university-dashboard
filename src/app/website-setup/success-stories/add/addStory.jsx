import BreedCrumb from '@/components/mui/breedcrumbs'
import { Card, Grid } from '@mui/material'
import React from 'react'

const values = {
    title: 'Add New Success Stories',
    links: [
        {
            title: "Success Stories List",
            path: '/website-setup/success-stories'
        }
    ]
}

const addStory = () => {
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
            </Card>
        </Grid>
    </Grid>
  )
}

export default addStory
