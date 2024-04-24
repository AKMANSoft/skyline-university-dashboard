"use client";
import React, { useState } from "react";
import { CustomCard } from "../styles/Card";
import dynamic from "next/dynamic";
import { Box, Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import styled from "@emotion/styled";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TagsText = styled(Typography)(({ theme }) => ({
  color: "#4B465C",
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: "22px",
}));

const Dot = styled(Box)(({ theme }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
}));

const AnalyticsCard = () => {
    const series = [
        {
          name: 'Visits',
          data: [15, 20, 15, 30, 15, 30, 20, 50, 40, 55, 60, 70]
        },
        {
          name: 'Clicks',
          data: [5, 10, 5, 20, 5, 20, 10, 40, 30, 45, 50, 60]
        },
      ]

  const areaColors = {
    series1: '#00CFE8',
    series2: '#666CFF',
  }

  const chartData = {
    options: {
        chart: {
            parentHeightOffset: 0,
            toolbar: { show: false }
          },
          tooltip: { shared: false },
          dataLabels: { enabled: false },
          stroke: {
            show: false,
            curve: 'straight'
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left',
            labels: { colors: "#00CFE8" },
            markers: {
              offsetY: 1,
              offsetX: -3
            },
            itemMargin: {
              vertical: 3,
              horizontal: 10
            }
          },
          colors: [areaColors.series1, areaColors.series2],
          fill: {
            opacity: 1,
            type: 'solid'
          },
          grid: {
            show: true,
            borderColor: "#DBDADE",
            xaxis: {
              lines: { show: true }
            }
          },
          yaxis: {
            labels: {
              style: { colors: "#4B465C" }
            },
            min: 0,
            max: 110,
            tickAmount: 4
          },
          legend: {
            show: false,
          },
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { color: "#DBDADE" },
            crosshairs: {
              stroke: { color: "#DBDADE" }
            },
            labels: {
              style: { colors: "#4B465C" }
            },
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
            ]
          }
    }
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
    <CustomCard sx={{ p: "25px" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography
            variant="body1"
            color="#373737"
            sx={{ fontSize: "18px", fontWeight: 600 }}
          >
            Analytics
          </Typography>
          <Stack
            direction="row"
            gap="12px"
            alignItems="center"
            sx={{ mt: "8px" }}
          >
            <Stack direction="row" gap="6px" alignItems="center">
                <Dot sx={{bgcolor: '#00CFE8'}} />
                <TagsText>Jobs Applied</TagsText>
            </Stack>
            <Stack direction="row" gap="6px" alignItems="center">
                <Dot sx={{bgcolor: '#666CFF'}} />
                <TagsText>Shortlisted</TagsText>
            </Stack>
          </Stack>
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

      <Chart
        options={chartData.options}
        series={series}
        type="area"
        width="100%"
        height="300"
      />
    </CustomCard>
  );
};

export default AnalyticsCard;
