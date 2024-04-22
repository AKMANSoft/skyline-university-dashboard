"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import { hexToRGBA } from "@/utils/hex-to-rgba";
import { CustomCard } from "@/components/styles/Card";
import { Chip } from "@mui/material";
import dynamic from "next/dynamic";

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
);

const series = [{ data: [32, 52, 72, 94, 116, 94, 72] }];

const RevenueCard = () => {
  if (typeof window === "undefined") return null
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        distributed: true,
        columnWidth: "42%",
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      hexToRGBA("#7367F0", 0.16),
      hexToRGBA("#7367F0", 0.16),
      hexToRGBA("#7367F0", 0.16),
      hexToRGBA("#7367F0", 0.16),
      hexToRGBA("#7367F0", 1),
      hexToRGBA("#7367F0", 0.16),
      hexToRGBA("#7367F0", 0.16),
    ],
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    grid: {
      show: false,
      padding: {
        top: -4,
        left: -7,
        right: -5,
        bottom: -12,
      },
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: "on",
      labels: {
        style: {
          colors: "gray", //theme.palette.text.disabled,
          fontFamily: "Public Sans", //theme.typography.fontFamily,
          fontSize: "14px", //theme.typography.body2.fontSize
        },
      },
    },
    yaxis: { show: false },
  };

  return (
    <CustomCard sx={{maxHeight: '218px'}}>
      <CardContent sx={{p:'24px'}}>
        <Box
          sx={{
            gap: 2,
            display: "flex",
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              gap: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontSize: {xs:'16px',sm:"18px"},
                  fontWeight: 600,
                  lineHeight: "24px",
                  color: '#4B465C'
                }}
              >
                Revenue Growth
              </Typography>
              <Typography
                component="div"
                variant="body2"
                sx={{
                  fontSize: {xs:'14px',sm:"13px"},
                  fontWeight: "400",
                  lineHeight: "20px",
                  color: "#4B465C",
                  opacity: ".7",
                }}
              >
                Weekly Report
              </Typography>
            </div>
            <div>
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                  fontSize: {xs:'25px',sm:"26px"},
                  fontWeight: 600,
                  lineHeight: "36px",
                }}
              >
                $4,673
              </Typography>
              <Chip
                label="+15.2%"
                variant="rounded"
                sx={{
                  borderRadius: "4px",
                  bgcolor: "#E3E1FC",
                  color: "#7367F0",
                  fontWeight: 600,
                  fontSize: "13px",
                }}
              />
            </div>
          </Box>
          <Chart
            type="bar"
            width={160}
            height={170}
            series={series}
            options={options}
          />
        </Box>
      </CardContent>
    </CustomCard>
  );
};

export default RevenueCard;
