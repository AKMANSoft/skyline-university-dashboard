"use client";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
);

import { hexToRGBA } from "@/utils/hex-to-rgba";
import { CustomCard } from "@/components/styles/Card";
import { Box, Button, Menu, MenuItem, Stack } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const series = [
  {
    name: "series-1",
    data: [22, 42, 16, 34, 58, 28, 36, 28, 52, 16, 28, 42],
  },
];

const colors = Array(9).fill(hexToRGBA("#2C549E", 0.16));

const options = {
  chart: {
    parentHeightOffset: 0,
    toolbar: { show: false },
    animations: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
      distributed: true,
      columnWidth: "35px",
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
      colors: ["grey"],
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
    // axisBorder: { color: "gray" },
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      style: {
        colors: "#4B465C",
        fontFamily: "Public Sans",
        fontSize: "14px",
      },
    },
  },
  yaxis: {
    labels: {
      offsetX: -15,
      formatter: (val) => `${val}`,
      style: {
        colors: "#4B465C",
        fontFamily: "Public Sans",
        fontSize: "14px",
      },
    },
  },
  responsive: [
    {
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleClose();
  };
  return (
    <CustomCard sx={{ p: "24px", mt: "25px" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
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
        </Box>
        <div>
          <Button
            onClick={handleClick}
            sx={{
              color: "#A8AAAE",
              fontSize: "15px",
              height: "24px",
              borderRadius: "6px",
              width: "100px",
              height: "38px",
              bgcolor: "rgba(168, 170, 174, 0.16)",
            }}
          >
            2022
            <IoIosArrowDown
              fontSize="15px"
              style={{ marginLeft: "10px" }}
              color="#A8AAAE"
            />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              sx: {
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <MenuItem onClick={() => handleOptionSelect("Export")}>
              2022
            </MenuItem>
          </Menu>
        </div>
      </Stack>
      <Stack>
        <Box>
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height={225}
          />
        </Box>
      </Stack>
    </CustomCard>
  );
};

export default GraphCard;
