"use client"
import { useState, useEffect, forwardRef } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from '@/utils/icon-imports/Icon'

// ** Custom Components Imports
import OptionsMenu from './OptionMenu'

// ** Styled Components
// import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import TableHeader from './TableHeader'
import { Avatar, Switch } from '@mui/material'
import img from "@/assets/images/img1.png"

// ** renders client column
const renderClient = row => {
    return (
        <Avatar alt="Remy Sharp" variant='square' src="/static/images/avatar/1.jpg" sx={{width: '58px', height: '43px'}} />
    )
}

const data = [
    {
        id: 1,
        img: img,
        title: "Objectives Should Be Stated Clearly",
        description: "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",

    },
    {
        id: 2,
        img: img,
        title: "Objectives Should Be Stated Clearly",
        description: "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",

    },
    {
        id: 3,
        img: img,
        title: "Objectives Should Be Stated Clearly",
        description: "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",

    },
    {
        id: 4,
        img: img,
        title: "Objectives Should Be Stated Clearly",
        description: "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",

    },
    {
        id: 5,
        img: img,
        title: "Objectives Should Be Stated Clearly",
        description: "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
    },
    {
        id: 5,
        img: img,
        title: "Objectives Should Be Stated Clearly",
        description: "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
    },
    {
        id: 7,
        img: img,
        title: "Objectives Should Be Stated Clearly",
        description: "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
    },
    {
        id: 8,
        img: img,
        title: "Objectives Should Be Stated Clearly",
        description: "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
    },
    {
        id: 9,
        img: img,
        title: "Objectives Should Be Stated Clearly",
        description: "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
    },
    {
        id: 10,
        img: img,
        title: "Objectives Should Be Stated Clearly",
        description: "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
    },
]

const defaultColumns = [
    {
        field: 'checkbox',
        headerName: '', 
        minWidth: 50,
        renderCell: ({ row }) => (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          </Box>
        )
      },
  {
    // flex: 0.25,
    field: 'img',
    minWidth: 200,
    headerName: 'IMAGE',
    renderCell: ({ row }) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', height: '62px', lineHeight: '62px' }}>
          {renderClient(row)}
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 250,
    field: 'title',
    headerName: 'TITLE',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary', height: '62px', lineHeight: '62px' }}>Test Title</Typography>
  },
  {
    flex: 0.15,
    minWidth: 350,
    field: 'description',
    headerName: 'Description',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary', height: '62px', lineHeight: '62px' }}>Test descrition</Typography>
  },
  {
    flex: 0.1,
    minWidth: 150,
    field: 'status',
    headerName: 'status',
    renderCell: ({ row }) => {
      return <Switch 
        color="success"
        value={row.status}
        onChange={(event) => {
        }}  
    />;
    }
  }
]

/* eslint-enable */
const List = () => {
  // ** State
  const [dates, setDates] = useState([])
  const [value, setValue] = useState('')
  const [selectedRows, setSelectedRows] = useState([])
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  const handleFilter = val => {
    setValue(val)
  }

  const columns = [
    ...defaultColumns,
    {
      flex: 0.1,
      minWidth: 50,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center', height: '62px', lineHeight: '62px' }}>
          <Tooltip title='Delete Invoice'>
            {/* <IconButton size='small' sx={{ color: 'text.secondary' }} onClick={() => dispatch(deleteInvoice(row.id))}> */}
            <IconButton size='small' sx={{ color: 'text.secondary' }}>
              <Icon icon='tabler:trash' />
            </IconButton>
          </Tooltip>
          <Tooltip title='View'>
            <IconButton
              size='small'
              component={Link}
              sx={{ color: 'text.secondary' }}
              href={`/apps/invoice/preview/${row.id}`}
            >
              <Icon icon='tabler:eye' />
            </IconButton>
          </Tooltip>
          <OptionsMenu
            menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
            iconButtonProps={{ size: 'small', sx: { color: 'text.secondary' } }}
            options={[
              {
                text: 'Download',
                icon: <Icon icon='tabler:download' fontSize={20} />
              },
              {
                text: 'Edit',
                href: `/apps/invoice/edit/${row.id}`,
                icon: <Icon icon='tabler:edit' fontSize={20} />
              },
              {
                text: 'Duplicate',
                icon: <Icon icon='tabler:copy' fontSize={20} />
              }
            ]}
          />
        </Box>
      )
    }
  ]

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card
            sx={{
                boxShadow: '0px 4px 18px 0px rgba(75, 70, 92, 0.10)',
                border: 'none'
            }}
          >
            <DataGrid
              autoHeight
              pagination
              rowHeight={62}
              rows={data}
              columns={columns}
              checkboxSelection
              disableRowSelectionOnClick
              pageSizeOptions={[10, 25, 50]}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              onRowSelectionModelChange={rows => setSelectedRows(rows)}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default List
