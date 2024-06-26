import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import icon1 from "@/assets/icons/or-icon1.png";
import icon2 from "@/assets/icons/or-icon2.png";
import icon3 from "@/assets/icons/or-icon3.png";
import icon4 from "@/assets/icons/or-icon4.png";
import Item from "@/components/dashboards/orders/Item";
import BreedCrumb from "@/components/mui/breedcrumbs";
import OrderList from "@/components/dashboards/orders/OrderList";

const values = {
    title: "Orders",
    links: [
      {
        title: "eCommerce",
        path: "/dashboards/ecommerce-dashboard",
      },
    ]
}

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
            <Grid xs={12} sx={{mt: '90px', mb: '18px'}}>
                <BreedCrumb values={values} />
            </Grid>

            <Grid
              container
              sx={{
                marginTop:{xs:'0px',md:'25px'},
                borderRadius: "6px",
                background: {xs:'transparent',md:"#FFF"},
                boxShadow: {xs:'none',md:"0px 4px 18px 0px rgba(75, 70, 92, 0.10)"},
                py: "19px",
              }}
            >
              <Grid item xs={12} md={3} xl={3} sx={{px:{xs:'0px',md:'19px'}}}>
                <Item icon={icon1} orders="12,689" status="Completed" />
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{pr:{xs:'0px',md:'19px'}}}>
                <Item icon={icon2} orders="56" status="Pending Orders" />
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{pr:{xs:'0px',md:'19px'}}}>
                <Item icon={icon3} orders="124" status="Cancel Orders" />
              </Grid>
              <Grid item xs={12} md={3} xl={3}>
                <Item icon={icon4} orders="32" status="Refunded" isHideBorder={true} />
              </Grid>
            </Grid>
            <Grid xs={12} sx={{mt: '27px'}}>
              <OrderList />
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Page;
