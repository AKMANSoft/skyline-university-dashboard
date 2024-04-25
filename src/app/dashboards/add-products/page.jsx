import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import BreedCrumb from "@/components/mui/breedcrumbs";
import AddProduct from "@/components/dashboards/add-products/AddProduct";
import PricingCard from "@/components/dashboards/add-products/PricingCard";
import { BlueButton } from "@/components/styles/Buttons";
import PictureCard from "@/components/dashboards/add-products/PictureCard";

const values = {
  title: "Add Products",
  links: [
    {
      title: "eCommerce",
      path: "/dashboards/ecommerce-dashboard",
    },
  ],
};

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
            <Grid xs={12} sx={{ mt: "90px", mb: "18px" }}>
              <BreedCrumb values={values} />
            </Grid>

            <Grid container columnSpacing={{xs:2,sm:3}}>
              <Grid item xs={12} md={3} xl={7}>
                <AddProduct />
              </Grid>
              <Grid item xs={12} md={3} xl={5}>
                <PictureCard />
                <PricingCard />
              </Grid>
            </Grid>

            <Stack direction='row' justifyContent='end' sx={{mt: '31px'}}>
                <BlueButton sx={{bgcolor: '#00318B', minWidth: '76px'}}>
                    Save
                </BlueButton>
            </Stack>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Page;
