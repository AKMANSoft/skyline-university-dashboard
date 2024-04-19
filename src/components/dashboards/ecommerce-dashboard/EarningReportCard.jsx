"use client";
import { useState } from "react";

// ** MUI Imports
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Avatar from "@mui/material/Avatar";
import TabContext from "@mui/lab/TabContext";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Chart from "react-apexcharts";

import icon1 from "@/assets/icons/er-icon1.png";
import icon2 from "@/assets/icons/er-icon2.png";

// ** Custom Components Import
// import Icon from 'src/@core/components/icon'
// import OptionsMenu from 'src/@core/components/option-menu'
// import CustomAvatar from 'src/@core/components/mui/avatar'
// import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import Image from "next/image";
import { hexToRGBA } from "@/utils/hex-to-rgba";
import { CustomCard } from "@/components/styles/Card";

const tabData = [
  {
    type: "orders",
    avatarIcon: icon1,
    series: [{ data: [28, 10, 45, 38, 15, 30, 35, 28, 8] }],
  },
  {
    type: "sales",
    avatarIcon: icon2,
    series: [{ data: [35, 25, 15, 40, 42, 25, 48, 8, 30] }],
  },
];

const renderTabs = (value, theme) => {
  return tabData.map((item, index) => {
    // const RenderAvatar = item.type === value ? CustomAvatar : Avatar

    return (
      <Tab
        key={index}
        value={item.type}
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
              borderStyle: item.type === value ? "solid" : "dashed",
              borderColor: item.type === value ? "#00318B" : "#00318B",
            }}
          >
            {/* <RenderAvatar
              variant='rounded'
              {...(item.type === value && { skin: 'light' })}
              sx={{ mb: 2, width: 34, height: 34, ...(item.type !== value && { backgroundColor: 'action.selected' }) }}
            >
            </RenderAvatar> */}
            <Image src={item.avatarIcon} alt="icon" />
            <Typography
              sx={{
                fontWeight: 500,
                color: "text.secondary",
                textTransform: "capitalize",
              }}
            >
              {item.type}
            </Typography>
          </Box>
        }
      />
    );
  });
};

const renderTabPanels = (value, theme, options, colors) => {
  return tabData.map((item, index) => {
    const max = Math.max(...item.series[0].data);
    const seriesIndex = item.series[0].data.indexOf(max);
    const finalColors = colors?.map((color, i) =>
      seriesIndex === i ? hexToRGBA("#00318B", 1) : color
    );

    return (
      <TabPanel key={index} value={item.type}>
        <Chart
          type="bar"
          height={263}
          options={{ ...options, colors: finalColors }}
          series={item.series}
        />
      </TabPanel>
    );
  });
};

const EarningReportCard = () => {
  if (typeof window !== "undefined") return null
  // ** State
  const [value, setValue] = useState("orders");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const colors = Array(9).fill(hexToRGBA("#00318B", 0.16));

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

  return (
    <CustomCard sx={{ p: "24px" }}>
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
          {renderTabPanels(value, options, colors)}
        </TabContext>
      </CardContent>
    </CustomCard>
  );
};

export default EarningReportCard;
