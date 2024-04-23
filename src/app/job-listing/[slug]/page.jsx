'use client'
import React from "react";
import {
  Box,
  Grid,
  Stack,
} from "@mui/material";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import BreedCrumb from "@/components/mui/breedcrumbs";
import CompanyDetails from "@/components/job-management/slug/CompanyDetails";

const Page = () => {
    const values = {
        title: "View Details",
        links: [
          {
            title: "Job Listing",
            path: "/job-listing",
          }
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

            <CompanyDetails hideCompanyCard={true} />
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Page;
