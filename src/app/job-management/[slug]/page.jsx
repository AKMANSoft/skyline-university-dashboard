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
import JobPostingChart from "@/components/job-management/JobPostingChart";
import ReviewCard from "@/components/job-management/ReviewCard";
import TopCompanyCard from "@/components/job-management/TopCompanyCard";
import { BlueButton } from "@/components/styles/Buttons";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import ManagementTable from "@/components/job-management/ManagementTable";
import ManagementTableMobile from "@/components/job-management/ManagementTableMobile";
import BreedCrumb from "@/components/mui/breedcrumbs";
import CompanyDetails from "@/components/job-management/slug/CompanyDetails";

const Page = () => {
    const values = {
        title: "View Details",
        links: [
          {
            title: "List",
            path: "/job-management",
          },
          {
              title: "Job Management",
              path: "/job-management",
            },
        ],
      };
  return (
    <main>
      <Sidebar />
      <Box sx={{ width: "100%", height: "auto" }}>
        <Stack direction="row">
          <Box sx={{ width: { md: "0px", lg: "260px" } }}></Box>
          <ContentBox
            sx={{ width: { xs: "100%", md: "100%", lg: "calc(100% - 260px)" } }}
          >
            <Appbar />
            
            <Grid sx={{width: '100%',mt:'90px', mb: '17px'}}>
              <BreedCrumb values={values} />
            </Grid>

            <CompanyDetails />
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Page;
