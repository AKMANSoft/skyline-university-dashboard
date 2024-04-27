'use client'
import React from "react";
import {
  Box,
  Card,
  Grid,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import ReviewCard from "@/components/job-management/ReviewCard";
import TopCompanyCard from "@/components/job-management/TopCompanyCard";
import { BlueButton } from "@/components/styles/Buttons";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import ManagementTable from "@/components/job-management/ManagementTable";
import ManagementTableMobile from "@/components/job-management/ManagementTableMobile";
import JobPostingChart from "@/components/job-management/JobPostingChart";
import BreedCrumb from "@/components/mui/breedcrumbs";
import CustomPagination from "@/components/common/CustomPagination";

const values = {title: "Job Management"}

const Page = () => {
  return (
    <main>
      {/* <Sidebar /> */}
      <Box sx={{ width: "100%", height: "auto" }}>
        <Stack direction="row">
          <Box sx={{ width: { md: "0px", lg: "260px" } }}></Box>
          <ContentBox
            sx={{ width: { xs: "100%", md: "100%", lg: "calc(100% - 260px)" } }}
          >
            <Appbar />

            <Grid sx={{mt:"90px"}}>
              <BreedCrumb values={values} />
            </Grid>

            <Stack
              direction={{xs:"column",lg:"column",xl:"row"}}
              alignItems="center"
              justifyContent="space-between"
              gap="26px"
              sx={{ width: "100%", mt: "20px", mb: "17px" }}
            >
              <JobPostingChart />
              <Stack
                direction={{xs:"column",lg:"row"}}
                alignItems="center"
                justifyContent="space-between"
                gap="26px"
                sx={{ width: "100%" }}
              >
                <ReviewCard />
                <TopCompanyCard />
              </Stack>
            </Stack>
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
                    sx={{
                      width: { xs: "120px", sm: "120px", md: "155px" },
                      height: "38px",
                      borderRadius: "6px",
                      color: "#4B465C",
                      fontSize: { xs: "12px", sm: "16px" },
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
                <Link href="/companies/social-company/post-a-job">
                  <BlueButton
                    variant="contained"
                    sx={{
                      minWidth: "120px",
                      textTransform: "capitalize",
                      bgcolor: "#00318B",
                      ml: { xs: "10px", sm: "16px" },
                      fontSize: { xs: "12px", sm: "16px" },
                    }}
                  >
                    <AddIcon
                      sx={{
                        color: "white",
                        fontSize: { sm: "8px", sm: "14px", md: "22px" },
                        mr: { xs: 0, sm: 1 },
                      }}
                    />{" "}
                    Post a Job
                  </BlueButton>
                </Link>
              </Stack>

              <Box>
                <Box sx={{display:{xs:'none',sm:"block"}, mt: "17px", width: "100%", overflowX: "auto" }}>
                  <ManagementTable />
                </Box>
                <Box sx={{ display:{xs:'block',sm:"none"}, mt: "17px", width: "100%", overflowX: "auto" }}>
                  <ManagementTableMobile />
                </Box>
                <Stack
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
                      icon={<CustomPagination />}
                      sx={{
                        "& .MuiPaginationItem-root.Mui-selected": {
                          backgroundColor: "#00318B",
                          color: "#fff",
                        },
                      }}
                      slots={{ previous: "Previous", next: "Next" }}
                    />
                  </Box>
                </Stack>
              </Box>
            </Card>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Page;
