'use client'
import React, { useState } from 'react'
import { Box, Stack, Grid, Link, Pagination, Typography, Card, TextField, Select, MenuItem } from "@mui/material"
import Sidebar from '@/components/sidebar'
import { ContentBox } from '@/components/styles/Box'
import Appbar from '@/components/appbar'
import BreedCrumb from '@/components/mui/breedcrumbs'
import { RiArrowDropDownLine } from "react-icons/ri";
import { BlueButton } from '@/components/styles/Buttons'
import AddIcon from "@mui/icons-material/Add";
import Country from '@/components/configuration/Country'
import CountryMobile from '@/components/configuration/CountryMobile'
import EditCountryModal from '@/components/configuration/modals/EditCountryModal'

const values = {
  title: "Country",
  links: [
    {
      title: "Configuration",
      path: "/configuration",
    },
  ],
};

const Page = () => {
    const [openAdd, setOpenAdd] = useState(false);
    
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

  return (
    <main>
        <EditCountryModal modalType="Add" open={openAdd} handleClose={handleCloseAdd} />
      {/* <Sidebar /> */}
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
          <Box sx={{width: {md: '0px', lg:'260px'}}}></Box>
          <ContentBox sx={{width: {xs: '100%', md: '100%', lg: 'calc(100% - 260px)'}}}>
            <Appbar />
            
            <Grid sx={{width: '100%',mt:'90px', mb: '17px'}}>
              <BreedCrumb values={values} />
            </Grid>
            
            <Card
              sx={{
                px: "0px",
                py: "23px",
                mt: "25px",
                boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ px: "24px" }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  gap={{ xs: "10px", sm: "16px" }}
                >
                  <TextField
                    id="outlined-basic"
                    placeholder="Search"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                        inputProps: { 
                            style: { fontSize: '12px' }
                          },
                      sx: {
                        height: "38px !important",
                        "&::placeholder": {
                          fontSize: "12px",
                        },
                      },
                    }}
                    sx={{
                      fontSize: { xs: "12px", sm: "16px" },
                      width: { xs: "107px", sm: "107px", md: "200px" },
                      borderRadius: "6px",
                    }}
                  />

                  <Select
                    id="outlined-basic"
                    placeholder="Select Status"
                    variant="outlined"
                    value=""
                    displayEmpty
                    IconComponent={RiArrowDropDownLine}
                    sx={{
                      width: { xs: "111px", sm: "120px", md: "155px" },
                      height: "38px",
                      borderRadius: "6px",
                      color: "#4B465C",
                      fontSize: { xs: "12px", sm: "16px" },
                      px: '0px',
                      "& .MuiSelect-root": {
                        color: "#757575",
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select Status
                    </MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
                  </Select>
                </Stack>
                  <BlueButton
                    variant="contained"
                    sx={{
                      minWidth: {xs:'60px',sm:"120px"},
                      textTransform: "capitalize",
                      bgcolor: "#00318B",
                      ml: { xs: "10px", sm: "16px" },
                      fontSize: { xs: "12px", sm: "16px" },
                      px:{xs:'6px', sm:'10px'}
                    }}
                    onClick={handleOpenAdd}
                  >
                    <AddIcon
                      sx={{
                        color: "white",
                        fontSize: { xs: "10px", sm: "14px", md: "22px" },
                        mr: { xs: 0, sm: 1 },
                      }}
                    />{" "}
                    Add Country
                  </BlueButton>
              </Stack>

              <Box>
                <Box sx={{display:{xs:'none',sm:"block"}, mt: "17px", width: "100%", overflowX: "auto" }}>
                  <Country />
                </Box>
                <Box sx={{ display:{xs:'block',sm:"none"}, mt: "17px", width: "100%", overflowX: "auto" }}>
                  <CountryMobile />
                </Box>
                {/* <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mt: "14px", px: '24px' }}
                >
                  <Typography
                    component="div"
                    variant="p"
                    sx={{
                      fontSize: "13px",
                      fontWeight: "400",
                      lineHeight: "20px",
                      color: "#4B465C",
                    }}
                  >
                    Showing 1 to 8 of 100 entries
                  </Typography>
                  <Box>
                    <Pagination
                      count={5}
                      color="primary"
                      shape="rounded"
                      sx={{
                        "& .MuiPaginationItem-root.Mui-selected": {
                          backgroundColor: "#00318B",
                          color: "#fff",
                        },
                      }}
                      slots={{ previous: "Previous", next: "Next" }}
                    />
                  </Box>
                </Stack> */}
              </Box>
            </Card>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  )
}

export default Page
