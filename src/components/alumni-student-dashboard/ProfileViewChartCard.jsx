"use client";
import React, { useState } from "react";
import { CustomCard } from "../styles/Card";
import dynamic from "next/dynamic";
import { Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ProfileViewChartCard = () => {
  const series = [
    {
      name: "series-1",
      data: [0, 10, 5, 40, 20, 35, 80, 40, 54, 10, 80, 70, 90],
    },
  ];

  const chartData = {
    options: {
      chart: {
        parentHeightOffset: 0,
        toolbar: { show: false },
      },
      stroke: { width: 5 },
      markers: {
        size: 6,
        style: {
          fill: "#fff",
          stroke: "#7367F0",
          strokeWidth: 3,
        },
        strokeWidth: 3,
        strokeColors: "transparent",
        colors: ["#7367F0"],
        discrete: [
          {
            size: 5,
            seriesIndex: 0,
            strokeColor: "#7367F0",
            fillColor: "white",
            dataPointIndex: series[0].data.length - 1,
          },
        ],
      },
      colors: ["#7367F0"],
      xaxis: {
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
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        min: 0,
        max: 90,
        tickAmount: 5,
        axisBorder: {
          show: true, 
          color: '#DBDADE',
        },
      },
      legend: {
        show: false,
      },
    },
  };

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
    <CustomCard sx={{p:'25px'}}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          variant="body1"
          color="#373737"
          sx={{ fontSize: "18px", fontWeight: 600 }}
        >
          How frequently have people viewed you
        </Typography>
        <div>
          <Button
            onClick={handleClick}
            sx={{
              color: "#A8AAAE",
              fontSize: "15px",
              height: "24px",
              borderRadius: "6px",
              width: '100px',
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

      <Stack direction='row' gap='4px' alignItems='end' sx={{mt: '15px', mb:'10px'}}>
      <Typography
          variant="body1"
          color="#4B465C"
          sx={{ fontSize: "40px", fontWeight: 600 }}
        >
          55
        </Typography>
        <Typography
          variant="body1"
          color="#868686"
          sx={{ fontSize: "18px", fontWeight: 600, mb:1 }}
        >
          Profile Views
        </Typography>
      </Stack>
      <Chart
        options={chartData.options}
        series={series}
        type="line"
        width="100%"
        height="235px"
      />
    </CustomCard>
  );
};

export default ProfileViewChartCard;
