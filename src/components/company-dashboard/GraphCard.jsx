"use client";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
);

import { hexToRGBA } from "@/utils/hex-to-rgba";
import { CustomCard } from "@/components/styles/Card";
import { Box, Stack } from "@mui/material";

const series = [
    {
      name: "series-1",
      data: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  ];

  const colors = Array(9).fill(hexToRGBA("#2C549E", 0.16));

const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        distributed: true,
        columnWidth: "8px",
        startingShape: "rounded",
        dataLabels: { position: "top" },
      },
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: {
      offsetY: -15,
      formatter: (val) => `${val}k`,
      style: {
        fontWeight: 500,
        colors: ["gray"],
        fontSize: "14px",
      },
    },
    colors,
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
        top: 20,
        left: -5,
        right: -8,
        bottom: -12,
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { color: "gray" },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      labels: {
        style: {
          colors: "gray",
          fontFamily: "Public Sans",
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      labels: {
        offsetX: -15,
        formatter: (val) => `$${val}k`,
        style: {
          colors: "gray",
          fontFamily: "Public Sans",
          fontSize: "14px",
        },
      },
    },
    responsive: [
      {
        breakpoint: "768px",
        options: {
          plotOptions: {
            bar: { columnWidth: "60%" },
          },
          grid: {
            padding: { right: 20 },
          },
        },
      },
    ],
  };

const GraphCard = () => {
  return (
    <CustomCard sx={{ p: "24px", mt: '25px' }}>
      <Stack>
        <Typography
            component="div"
            variant="h5"
            sx={{
            fontSize: "18px",
            fontWeight: "700",
            color: "#4B465C",
            }}
        >
            Jobs Analytics
        </Typography>
        <Typography
            component="div"
            variant="body2"
            sx={{
            fontSize: "13px",
            fontWeight: "700",
            lineHeight: "20px",
            color: "#4B465C",
            opacity: ".7",
            }}
        >
            Jobs Posted Monthly
        </Typography>

        <Box>
            <Chart
            options={options}
            series={series}
            type="bar"
            width={635}
            height={225}
          />
        </Box>
      </Stack>
    </CustomCard>
  )
}

export default GraphCard
