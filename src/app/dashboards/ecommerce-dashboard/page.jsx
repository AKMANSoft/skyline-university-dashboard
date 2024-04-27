import React from "react";
import {
  Box,
  Grid,
  Stack
} from "@mui/material";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import SalesCard from "@/components/dashboards/ecommerce-dashboard/SalesCard";
import RevenueCard from "@/components/dashboards/ecommerce-dashboard/RevenueCard";
import icon1 from "@/assets/icons/rc-icon1.png"
import icon2 from "@/assets/icons/rc-icon2.png"
import icon3 from "@/assets/icons/rc-icon3.png"
import icon4 from "@/assets/icons/rc-icon4.png"
import VerticalGridCard from "@/components/dashboards/ecommerce-dashboard/VerticalGridCard";
import EarningReportCard from "@/components/dashboards/ecommerce-dashboard/EarningReportCard";
import ProductsList from "@/components/dashboards/ecommerce-dashboard/ProductsList";
import OrderList from "@/components/dashboards/ecommerce-dashboard/OrderList";

const Page = () => {
  
  return (
    <main>
      <Box sx={{ width: "100%", height: "auto" }}>
        <Stack direction="row">
          <Box sx={{ width: { md: "0px", lg: "260px" } }}></Box>
          <ContentBox
            sx={{ width: { xs: "100%", md: "100%", lg: "calc(100% - 260px)" } }}
          >
            <Appbar />
            <Grid container columnSpacing={{xs:2,sm:3}} rowSpacing={{xs:2,sm:3}} sx={{mt: '60px'}}>
              <Grid item xs={12} sm={6} lg={6} xl={3}>
                <SalesCard />
              </Grid>
              <Grid item xs={12} sm={6} lg={6} xl={3}>
                <RevenueCard />
              </Grid>
              <Grid item xs={6} sm={3} lg={3} xl={1.5}>
                <VerticalGridCard 
                  icon={icon1}
                  title="Sales"
                  total="24.67k"
                />
              </Grid>
              <Grid item xs={6} sm={3} lg={3} xl={1.5}>
                <VerticalGridCard 
                  icon={icon4}
                  title="Customers"
                  total="1.28k"
                />
              </Grid>
              <Grid item xs={6} sm={3} lg={3} xl={1.5}>
                <VerticalGridCard 
                  icon={icon3}
                  title="Products"
                  total="1.28k"
                />
              </Grid>
              <Grid item xs={6} sm={3} lg={3} xl={1.5}>
                <VerticalGridCard 
                  icon={icon2}
                  title="Revenue"
                  total="24.67k"
                />
              </Grid>
              <Grid item xs={12}>
                <EarningReportCard />
              </Grid>
              <Grid item xs={12} lg={3} sx={{display: {xs:'none',sm:'block'}}}>
                <ProductsList />
              </Grid>
              <Grid item xs={12} lg={9}>
                <OrderList />
              </Grid>
              <Grid item xs={12} lg={3} sx={{display: {xs:'block',sm:'none'}}}>
                <ProductsList />
              </Grid>
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Page;
