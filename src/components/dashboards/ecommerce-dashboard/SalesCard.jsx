"use client";
import { CustomCard } from "@/components/styles/Card";
import { Box, CardContent, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
);
import React from "react";

const series = [{ data: [40, 20, 65, 50] }];

const SalesCard = () => {
  if (typeof window === "undefined") return null
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      animations: {
        enabled: false,
      },
      // sparkline: { enabled: true },
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    grid: {
      show: false,
      padding: {
        top: 5,
        bottom: 20,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityTo: 0,
        opacityFrom: 1,
        shadeIntensity: 1,
        stops: [0, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.4,
              color: "grey", //theme.palette.success.main
            },
            {
              opacity: 0,
              offset: 100,
              color: "grey", //theme.palette.background.paper
            },
          ],
        ],
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: "light",
        shadeIntensity: 1,
        color: "#28C76F", //theme.palette.success.main
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
  };

  return (
    <CustomCard sx={{ padding: "0px", maxHeight: "218px" }}>
      <CardContent sx={{ p: "24px", pb: 0 }}>
        <Typography
          component="div"
          variant="h5"
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "24px",
            color: "#4B465C",
          }}
        >
          Sales Growth
        </Typography>
        <Typography
          component="div"
          variant="body2"
          sx={{
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "20px",
            color: "#4B465C",
            opacity: ".7",
          }}
        >
          Weekly Report
        </Typography>
      </CardContent>
      {!isSSR && (
        <Chart
          options={options}
          series={series}
          type="area"
          width="105%"
          style={{ marginLeft: "-20px" }}
          height={96}
        />
      )}
      <CardContent sx={{ p: "24px", pt: 0 }}>
        <Box
          sx={{
            gap: 2,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography component="div" variant="h4">
            175k
          </Typography>
          <Typography
            component="div"
            variant="body2"
            sx={{ color: "error.main" }}
          >
            -16.02%
          </Typography>
        </Box>
      </CardContent>
    </CustomCard>
  );
};

export default SalesCard;
