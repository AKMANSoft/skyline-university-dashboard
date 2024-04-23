import React from "react";
import {
  Box,
  Stack,
  Grid,
} from "@mui/material";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import BreedCrumb from "@/components/mui/breedcrumbs";
import icon1 from "@/assets/icons/print-icon.png";
import icon2 from "@/assets/icons/order-icon3.png";
import icon3 from "@/assets/icons/order-icon5.png";
import icon4 from "@/assets/icons/order-icon5.png";
import CardItem from "@/components/job-listing/CardItem";
import MyJobsList from "@/components/job-listing/MyJobsList";

const values = { title: "My Orders" };

const ordercards = [
  { title: "Total Job Posted", total: "65", borderColor: "#00318B", icon: icon1 },
  { status: "Jobs Listed Currently", total: "55", borderColor: "#00CA99", icon: icon2 },
  { status: "Total Applicants", total: "100", borderColor: "#F7CA18", icon: icon3 },
  { status: "Total Shortlist Alumni’s", total: "100", borderColor: "#F3103C", icon: icon4 },
];

const JobsListing = () => {

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

            <Grid xs={12} sx={{ mt: "90px" }}>
              <BreedCrumb values={values} />
            </Grid>

            <Grid
              container
              columnSpacing={{ xs: 2, sm: 3 }}
              sx={{ mt: "23px" }}
            >
              {ordercards?.map((card, index) => (
                <Grid key={index} item xs={12} md={6} lg={3} sx={{mb:{xs:'20px',md:"20px",lg:0}}}>
                  <CardItem values={card} />
                </Grid>
              ))}
            </Grid>

            <Grid xs={12} sx={{mt: {xs:'7px',md:'7px',lg:'27px'}}}>
                <MyJobsList />
            </Grid>

          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default JobsListing;
