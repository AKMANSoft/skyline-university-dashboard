"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import styled from "@emotion/styled";
import bgImg from "@/assets/bg-dashboard.png";
import img from "@/assets/images/img6.png";
import useIcon from "@/assets/icons/uae.png";
import fliteIcon from "@/assets/icons/flite-icon.png";
import vectorImg from "@/assets/images/vector-img.png";
import { FiUsers } from "react-icons/fi";
import img2 from "@/assets/images/img7.png";
import Image from "next/image";
import { hexToRGBA } from "@/utils/hex-to-rgba";
import { ListIcon } from "@/utils/svg-icons";
import ActivityItem from "@/components/jobs-dashboard/ActivityItem";
import { activities } from "@/components/jobs-dashboard/ActivityData";
import { IoIosArrowDown } from "react-icons/io";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const currentYear = new Date().getFullYear();
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
      columnWidth: "55%",
      startingShape: "rounded",
      dataLabels: { position: "top" },
    },
  },
  legend: { show: false },
  tooltip: { enabled: false },
  dataLabels: {
    offsetY: -30,
    formatter: (val) => `${val}`,
    style: {
      fontWeight: 500,
      colors: ["grey"],
      fontSize: "18px",
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
    //   axisBorder: { color: theme.palette.divider },
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
    labels: {
      style: {
        colors: "#4B465C", //theme.palette.text.disabled,
        fontFamily: "Public Sans",
        fontSize: "14px", //theme.typography.body2.fontSize
      },
    },
  },
  yaxis: {
    labels: {
      offsetX: -15,
      formatter: (val) => `${val}`,
      style: {
        colors: "#4B465C", //theme.palette.text.disabled,
        //   fontFamily:  '', //theme.typography.fontFamily,
        fontSize: "13px", //theme.typography.body2.fontSize
      },
    },
  },
  responsive: [
    {
      // breakpoint: theme.breakpoints.values.sm,
      options: {
        plotOptions: {
          bar: { columnWidth: "35.8px" },
        },
        grid: {
          padding: { right: 20 },
        },
      },
    },
  ],
};

const series = [
  {
    name: "series-1",
    data: [22, 42, 16, 34, 58, 28, 36, 28, 52, 16, 28, 42],
  },
];

const BackgroundImageGrid = styled(Grid)({
  width: "100%",
  background: `linear-gradient(72deg, #00318B 38.19%, #2C549E 95.26%), url(${bgImg.src}) lightgray 50% / cover no-repeat`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "30px",
  borderRadius: "10px",
  height: { xs: "auto", sm: "251px" },
  aspectRatio: "3.15",
  mixBlendMode: "multiply",
});

const Text = styled(Typography)({
  color: "#fff",
  fontWeight: 700,
  lineHeight: "22px",
});

const Text2 = styled(Typography)({
  color: "#4B465C",
  fontWeight: 700,
  lineHeight: "20px",
});

const Dashboard = () => {
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
    <Grid sx={{ mt: "90px" }}>
      <Grid container columnGap="26px">
        <BackgroundImageGrid
          item
          xs={12}
          lg={12}
          xl={5.7}
          sx={{ padding: { xs: "20px", sm: "30px" } }}
        >
          <Stack direction="row" gap="20px">
            <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
              <Text sx={{ fontSize: "18px" }}>Overview</Text>
              <Text sx={{ fontSize: "14px" }}>
                Complete overview of job management
              </Text>
              <Stack
                direction="row"
                gap="15px"
                alignItems="center"
                sx={{ mt: "18px" }}
              >
                <Box
                  sx={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    border: "4px solid #F7CA18",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#1A265C",
                  }}
                >
                  <Text sx={{ fontSize: "20px" }}>65</Text>
                </Box>
                <Text sx={{ fontSize: "15px" }}>Total Job Posted</Text>
              </Stack>
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  bgcolor: "#244E9B",
                  mt: "26px",
                  mb: "24px",
                }}
              ></Box>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                gap={{ xs: "20px", sm: "59px" }}
                alignItems={{ xs: "start", sm: "center" }}
                sx={{ position: "relative" }}
              >
                <Stack direction="row" gap="8px" alignItems="center">
                  <Box
                    sx={{
                      width: "48px",
                      height: "30px",
                      bgcolor:
                        "linear-gradient(0deg, #234D9A 0%, #234D9A 100%), #7367F0",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#1A265C",
                    }}
                  >
                    <Text sx={{ fontSize: "15px" }}>65</Text>
                  </Box>
                  <Text
                    sx={{
                      fontSize: {
                        xs: "14px",
                        md: "12px",
                        lg: "14px",
                        xl: "15px",
                      },
                    }}
                  >
                    Total Applicants
                  </Text>
                </Stack>
                <Stack direction="row" gap="8px" alignItems="center">
                  <Box
                    sx={{
                      width: "48px",
                      height: "30px",
                      bgcolor:
                        "linear-gradient(0deg, #234D9A 0%, #234D9A 100%), #7367F0",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#1A265C",
                    }}
                  >
                    <Text
                      sx={{
                        fontSize: {
                          xs: "14px",
                          md: "12px",
                          lg: "14px",
                          xl: "15px",
                        },
                      }}
                    >
                      40
                    </Text>
                  </Box>
                  <Text sx={{ fontSize: "15px" }}>Total Shortlisted</Text>
                </Stack>
                <Box
                  sx={{
                    position: "absolute",
                    right: "0px",
                    bottom: "-10px",
                    display: {xs:'block', sm:'none'}
                  }}
                >
                  <Image
                    src={img}
                    alt="image"
                    style={{
                      width: "100%",
                      maxWidth: '146px',
                      maxHeight: '92px',
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Stack>
            </Box>

            <Box
              sx={{
                width: "40%",
                height: "100%",
                overflow: "hidden",
                display: { xs: "none", sm: "block" },
              }}
            >
              <Image
                src={img}
                alt="image"
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Stack>
        </BackgroundImageGrid>
        <Grid
          item
          xs={12}
          xl={2.9}
          sx={{
            boxShadow: "0px 2px 10px 0px rgba(76, 78, 100, 0.22)",
            p: "20px",
            borderRadius: "10px",
            bgcolor: "white",
            mt: { xs: "25px", xl: "0px" },
          }}
        >
          <Text2 sx={{ fontSize: "13px", opacity: ".7" }}>
            Total Companies
          </Text2>
          <Text2 sx={{ fontSize: "22px", lineHeight: "30px!important" }}>
            210
          </Text2>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              mt: "26px",
            }}
          >
            <Box>
              <Stack direction="row" gap="8px">
                <Image src={useIcon} alt="image" />
                <Text2 sx={{ fontSize: "15px", lineHeight: "22px" }}>
                  In UAE
                </Text2>
              </Stack>
              <Text2 sx={{ fontSize: "18px", mt: "11px", lineHeight: "24px" }}>
                60%
              </Text2>
              <Text2
                sx={{
                  fontSize: "13px",
                  mt: "11px",
                  lineHeight: "24px",
                  opacity: ".7",
                }}
              >
                110
              </Text2>
            </Box>

            <Stack direction="column" alignItems="center" gap="6px">
              <Box
                sx={{
                  width: "1px",
                  height: "31px",
                  bgcolor: "rgba(76, 78, 100, 0.12)",
                }}
              ></Box>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  bgcolor: "rgba(76, 78, 100, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text2 sx={{ fontSize: "11px" }}>VS</Text2>
              </Box>
              <Box
                sx={{
                  width: "1px",
                  height: "31px",
                  bgcolor: "rgba(76, 78, 100, 0.12)",
                }}
              ></Box>
            </Stack>

            <Box sx={{ textAlign: "end" }}>
              <Stack direction="row" gap="8px">
                <Image src={fliteIcon} alt="image" />
                <Text2 sx={{ fontSize: "15px", lineHeight: "22px" }}>
                  F Companies
                </Text2>
              </Stack>
              <Text2 sx={{ fontSize: "18px", mt: "11px", lineHeight: "24px" }}>
                40%
              </Text2>
              <Text2
                sx={{
                  fontSize: "13px",
                  mt: "11px",
                  lineHeight: "24px",
                  opacity: ".7",
                }}
              >
                100
              </Text2>
            </Box>
          </Stack>
          <Stack
            direction="row"
            sx={{
              width: "100%",
              height: "10px",
              borderRadius: "20px",
              overflow: "hidden",
              mt: "20px",
            }}
          >
            <Box
              sx={{
                width: "40%",
                height: "100%",
                bgcolor: "#00CFE8",
              }}
            ></Box>
            <Box
              sx={{
                width: "60%",
                height: "100%",
                bgcolor: "#666CFF",
              }}
            ></Box>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          xl={2.9}
          sx={{
            boxShadow: "0px 2px 10px 0px rgba(76, 78, 100, 0.22)",
            p: "20px",
            borderRadius: "10px",
            position: "relative",
            bgcolor: "white",
            mt: { xs: "25px", xl: "0px" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          >
            <Image src={vectorImg} alt="image" />
          </Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="start"
          >
            <Box>
              <Box
                sx={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  bgcolor: "#F2F8EF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FiUsers fontSize="22px" color="#7CBD5B" />
              </Box>
              <Text2 sx={{ fontSize: "16px", lineHeight: "20px", mt: "5px" }}>
                Total Alumni&apos;s
              </Text2>
              <Text2
                sx={{
                  fontSize: "25px",
                  lineHeight: "20px",
                  mt: "5px",
                  color: "#7CBD5B !important",
                  mt: "8px",
                }}
              >
                529
              </Text2>
            </Box>
            <Box>
              <Image src={img2} alt="image" />
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Stack
        direction={{ xs: "column", xl: "row" }}
        columnGap="26px"
        sx={{ mt: "26px" }}
      >
        <Box
          sx={{
            boxShadow: "0px 2px 10px 0px rgba(76, 78, 100, 0.22)",
            p: "20px",
            borderRadius: "10px",
            bgcolor: "white",
            width: { xs: "100%", xl: "47.2%" },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                component="div"
                variant="p"
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  color: "#4B465C",
                  fontFamily: "Public Sans",
                }}
              >
                Jobs Analytics
              </Typography>
              <Typography
                component="div"
                variant="p"
                sx={{
                  fontSize: "13px",
                  fontWeight: 700,
                  lineHeight: "20px",
                  color: "var(--Light-Typography-Color-Muted-Text, #4B465C)",
                  fontFamily: "Public Sans",
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
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height={399}
          />
        </Box>

        <Box
          sx={{
            boxShadow: "0px 2px 10px 0px rgba(76, 78, 100, 0.22)",
            p: "20px",
            borderRadius: "10px",
            bgcolor: "white",
            width: { xs: "100%", xl: "50%" },
            maxHeight: "550px",
            overflow: "auto",
            mt: { xs: "25px", xl: "0px" },
          }}
        >
          <Stack direction="row" gap="12px" alignItems="center">
            <ListIcon />
            <Typography
              variant="p"
              component="p"
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "24px",
                color: "#4B465C",
                ml: "12px",
                fontFamily: "Public Sans",
              }}
            >
              Activity Timeline
            </Typography>
          </Stack>
          <Box
            sx={{
              mt: "24px",
            }}
          >
            {activities?.map((activity, index) => (
              <ActivityItem
                key={index}
                isLastItem={index + 1 === activities?.length}
                activity={activity}
              />
            ))}
          </Box>
        </Box>
      </Stack>
    </Grid>
  );
};

export default Dashboard;
