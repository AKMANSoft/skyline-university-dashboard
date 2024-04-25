"use client";
import React from "react";
import { Box, Stack, Grid, Typography } from "@mui/material";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import BreedCrumb from "@/components/mui/breedcrumbs";
import CheckoutCard from "@/components/alumni-store/CheckoutCard";
import PaymentMethodCard from "@/components/alumni-store/PaymentMethodCard";

const values = {
  title: "Checkout",
};

const Checkout = () => {
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

            <Grid xs={12} sx={{ mt: "90px" }}>
              <BreedCrumb values={values} />
            </Grid>

            <Grid
              container
              columnSpacing={{ xs: 2, sm: 3 }}
              sx={{ mt: "23px" }}
            >
              <Grid item xs={12} lg={12} xl={8}>
                <CheckoutCard />
              </Grid>
              <Grid item xs={12} lg={12} xl={4} sx={{mt: {xs:'25px',lg:'25px', xl:'0px'}}}>
                <PaymentMethodCard />
              </Grid>
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Checkout;
