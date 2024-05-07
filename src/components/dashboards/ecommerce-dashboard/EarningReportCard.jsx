"use client";
import { useState } from "react";

import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import icon1 from "@/assets/icons/er-icon1.png";
import icon2 from "@/assets/icons/er-icon2.png";

import Image from "next/image";
import { hexToRGBA } from "@/utils/hex-to-rgba";
import { CustomCard } from "@/components/styles/Card";
import { Button, Menu, MenuItem, Stack } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

const tabData = [
  {
    type: "orders",
    avatarIcon: icon1,
    series: [
      {
        name: "series-1",
        data: [28, 10, 45, 38, 15, 30, 35, 28, 8, 10, 11, 12],
      },
    ],
  },
  {
    type: "sales",
    avatarIcon: icon2,
    series: [
      {
        name: "series-2",
        data: [35, 25, 15, 40, 42, 25, 48, 8, 30, 10, 11, 12],
      },
    ],
  },
];

const renderTabs = (value, theme) => {
  return tabData.map((item, index) => {
    return (
      <Tab
        key={index}
        value={item?.type}
        label={
          <Box
            sx={{
              width: 110,
              height: 94,
              borderWidth: 1,
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              flexDirection: "column",
              justifyContent: "center",
              borderStyle: item?.type === value ? "solid" : "dashed",
              borderColor: item?.type === value ? "#00318B" : "#DBDADE",
            }}
          >
            <Image priority src={item?.avatarIcon} alt="icon" />
            <Typography
              sx={{
                fontWeight: 500,
                color: "text.secondary",
                textTransform: "capitalize",
              }}
            >
              {item?.type}
            </Typography>
          </Box>
        }
      />
    );
  });
};

const renderTabPanels = (value, theme, options, colors) => {
  return tabData.map((item, index) => {
    // const max = Math.max(...item.series[0].data);
    // const seriesIndex = item.series[0].data.indexOf(max);
    // const finalColors = colors?.map((color, i) =>
    //   seriesIndex === i ? hexToRGBA("#00318B", 1) : color
    // );

    return (
      <TabPanel key={index} value={item?.type}>
        <Chart
          options={options}
          series={item?.series}
          type="bar"
          width="100%"
          height={263}
        />
      </TabPanel>
    );
  });
};

const EarningReportCard = () => {
  const [value, setValue] = useState("orders");
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const colors = Array(9).fill(hexToRGBA("#00318B", 0.16));

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
        columnWidth: "35%",
        startingShape: "rounded",
        dataLabels: { position: "top" },
      },
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: {
      offsetY: -30,
      formatter: (val) => `${val}k`,
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
      min: 0,
      max: 50,
      tickAmount: 5,
      labels: {
        formatter: (val) => `${val}k`,
        offsetX: -15,
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

  return (
    <CustomCard sx={{ p: "24px" }}>
      <Stack direction='row' justifyContent='space-between'>
      <Box>
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
        Earning Reports
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
        Yearly Earnings Overview
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
          <MenuItem onClick={() => handleOptionSelect("Export")}>2022</MenuItem>
        </Menu>
      </div>
      </Stack>
      <CardContent sx={{ "& .MuiTabPanel-root": { p: 0 } }}>
        <TabContext value={value}>
          <TabList
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChange}
            aria-label="earning report tabs"
            sx={{
              border: "0 !important",
              "& .MuiTabs-indicator": { display: "none" },
              "& .MuiTab-root": {
                p: 0,
                minWidth: 0,
                borderRadius: "10px",
                "&:not(:last-child)": { mr: 4 },
              },
            }}
          >
            {renderTabs(value)}
          </TabList>
          {/* {renderTabPanels(value, options, colors)} */}
          {tabData.map((item, index) => {
            return (
              <TabPanel key={index} value={item?.type}>
                <Chart
                  options={options}
                  series={item?.series}
                  type="bar"
                  width="100%"
                  height={263}
                />
              </TabPanel>
            );
          })}
        </TabContext>
      </CardContent>
    </CustomCard>
  );
};

export default EarningReportCard;
