"use client";
import { hexToRGBA } from "@/utils/hex-to-rgba";
import styled from "@emotion/styled";
import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

const colors = Array(9).fill(hexToRGBA("#2C549E", 0.16));
const options = {
  chart: {
    parentHeightOffset: 0,
    toolbar: { show: false },
    animations: {
      enabled: false,
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      columnWidth: "10px",
      startingShape: "rounded",
      states: {
        hover: {
          color: "green",
        },
      },
    },
  },
  legend: { show: false },
  dataLabels: {
    style: {
      colors: ["transparent"],
    },
  },
  colors,
  states: {
    hover: {
      filter: { type: "none" },
      style: {
        colors: ["red"],
      },
    },
    active: {
      filter: { type: "none" },
    },
  },
  yaxis: {
    show: false,
    max: 10,
  },
  xaxis: {
    categories: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    labels: {
      style: {
        colors: "#4B465C",
        opacity: ".7",
        fontSize: "13px",
        fontSize: "11px",
        fontFamily: "Public Sans",
        fontWeight: 600,
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    gridLines: {
      show: false,
    },
  },
};

const series = [
  {
    name: "series-1",
    data: [
      1, 3, 4, 7, 5, 6, 7, 1, 1, 3, 4, 5, 5, 10, 6, 7, 1, 1, 3, 4, 5, 1, 4, 6,
      7, 9, 5, 1, 2, 4, 5,
    ],
  },
];

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "24px",
  color: "#4B465C",
}));

const CardText = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 400,
  lineHeight: "20px",
  color: "#4B465C",
  opacity: ".7",
}));

const JobPostingChart = () => {
  if (typeof window !== "undefined") return null
  return (
    <Card
      sx={{
        p: "24px",
        width: "100%",
        minHeight: "218px",
        height: "218px",
        boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
      }}
    >
      <Stack direction="row" sx={{ height: "100%" }}>
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{ height: "100%", minWidth: "100px" }}
        >
          <Box>
            <CardTitle>Job Posting</CardTitle>
            <CardText sx={{ mt: "8px" }}>Monthly Report</CardText>
          </Box>
          <Box>
            <Stack direction="row" gap="5px" alignItems="center">
              <Typography
                component="div"
                variant="p"
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#4B465C",
                  lineHeight: "24px",
                }}
              >
                Total
              </Typography>
              <Typography
                component="div"
                variant="p"
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#00318B",
                  lineHeight: "36px",
                }}
              >
                165
              </Typography>
            </Stack>
            <Box
              sx={{
                p: "5px 10px",
                width: "65px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                backgroundColor: "#DFE5F0",
                color: "#00318B",
                fontSize: "13px",
                fontWeight: 600,
                mt: "8px",
              }}
            >
              +15.2%
            </Box>
          </Box>
        </Stack>

        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflowX: "auto",
            overflowY: 'hidden',
            mb:'-10px',
            "&::-webkit-scrollbar": {
                width: "4px",
                height: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                width: '3px',
                height: '3px',
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
                borderRadius: "4px",
              },
          }}
        >
          <Chart
            options={options}
            series={series}
            type="bar"
            width={635}
            height="100%"
          />
        </Box>
      </Stack>
    </Card>
  );
};

export default JobPostingChart;
