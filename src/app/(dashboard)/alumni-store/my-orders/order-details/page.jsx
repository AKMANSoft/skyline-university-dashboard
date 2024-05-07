"use client";
import React from "react";
import { Box, Stack, Grid, Typography, Button } from "@mui/material";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import BreedCrumb from "@/components/mui/breedcrumbs";
import icon1 from "@/assets/icons/order-icon2.png";
import icon2 from "@/assets/icons/order-icon3.png";
import icon3 from "@/assets/icons/order-icon4.png";
import icon4 from "@/assets/icons/order-icon1.png";
import MyOrderList from "@/components/alumni-store/MyOrderList";
import OrderDetailListTable from "@/components/alumni-store/OrderDetailListTable";
import { CustomCard } from "@/components/styles/Card";
import styled from "@emotion/styled";
import TimelineCard from "@/components/alumni-store/TimelineCard";
import PersonDetailCard from "@/components/alumni-store/PersonDetailCard";
import ShippingCard from "@/components/alumni-store/ShippingCard";
import BillingAddresscard from "@/components/alumni-store/BillingAddresscard";
import TotalAssets from "@/components/alumni-store/TotalAssets";

const values = {
  title: "View Details",
  links: [
    {
      title: "eCommerce",
      path: "/ecommerce-dashboard",
    },
  ],
};

const OrderDetails = () => {
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

              <Stack
                direction="row"
                alignItems="end"
                justifyContent="space-between"
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  gap="20px"
                  sx={{ mt: "25px", mb: "8px" }}
                >
                  <Typography
                    component="div"
                    variant="p"
                    sx={{
                      color: "#5D596C",
                      fontSize: "18px",
                      fontWeight: 500,
                      lineHeight: "24px",
                    }}
                  >
                    Order #32543
                  </Typography>
                  <Box
                    sx={{
                      width: "67px",
                      height: "27px",
                      borderRadius: "4px",
                      bgcolor: "rgba(115, 103, 240, 0.10)",
                      color: "#7367F0",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    COD
                  </Box>
                </Stack>
                <Button
                  sx={{
                    width: "150px",
                    height: "38px",
                    bgcolor: "#FCE4E4",
                    fontSize: "15px",
                    color: "#EA5455",
                    textTransform: "capitalize",
                  }}
                >
                  Cancel Order
                </Button>
              </Stack>
              <Typography
                component="div"
                variant="p"
                sx={{
                  color: "#6F6B7D",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Aug 17, 2024, 5:48 (ET)
              </Typography>
            </Grid>

            <Grid
              container
              columnSpacing={{ xs: 2, sm: 3 }}
              sx={{ mt: "23px" }}
            >
              <Grid item xs={12} md={8}>
                <CustomCard>
                  <Box sx={{ p: "24px" }}>
                    <Typography
                      component="div"
                      variant="p"
                      sx={{
                        color: "#5D596C",
                        fontSize: "18px",
                        fontWeight: 500,
                      }}
                    >
                      Order details
                    </Typography>
                  </Box>
                  <OrderDetailListTable />
                  <TotalAssets />
                </CustomCard>

                <TimelineCard />
              </Grid>
              <Grid item xs={12} md={4}>
                <PersonDetailCard />
                <ShippingCard />
                <BillingAddresscard />
              </Grid>
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default OrderDetails;
