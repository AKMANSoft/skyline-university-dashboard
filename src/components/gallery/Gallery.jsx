"use client";
import { Box, Card, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardItem from "./CardItem";
import image1 from "@/assets/images/img1.png";
import image2 from "@/assets/images/img2.png";
import image3 from "@/assets/images/img3.png";
import image4 from "@/assets/main-bg.png";
import { GridBox } from "../styles/Box";

const tabsArr = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
  "Category 6",
  "Category 7",
  "Category 8",
  "Category 9",
];

const cardList = [
  {
    img: image1,
  },
  {
    img: image2,
  },
  {
    img: image3,
  },
  {
    img: image4,
  },
  {
    img: image1,
  },
  {
    img: image1,
  },
  {
    img: image1,
  },
  {
    img: image1,
  },
  {
    img: image1,
  },
  {
    img: image1,
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography  variant="body1">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Gallery = () => {
  const [value, setValue] = React.useState(0);
  const [isClient, setIsClient] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card
          sx={{
            boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
            border: "none",
            px: "20px",
            py:'50px',
          }}
        >
          <Box
            sx={{
              width: "100%",
              border: "2px solid #EAEAEA",
              height: "55px",
              p: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              overflowX: "auto",
              overflowY: "hidden",
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
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                minHeight: "38px",
                height: "38px",
                minWidth: "fit-content",
              }}
              TabIndicatorProps={{
                style: { display: "none" },
              }}
            >
              {tabsArr?.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab}
                  {...a11yProps(index)}
                  sx={{
                    height: "38px",
                    minHeight: "38px",
                    fontSize: { sm: "14px", md: "16px" },
                    textTransform: "capitalize",
                    minWidth: { sm: "120px", md: "130px", lg: "148px" },
                    py: 0,
                    "&.Mui-selected": {
                      backgroundColor: "#00318B",
                      color: "white",
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
          <Box>
            <CustomTabPanel
              value={value}
              index={0}
              sx={{
                "& .css-19kzrtu": {
                  px: "0px !important",
                },
              }}
            >
              {isClient &&
              <GridBox
                sx={{
                  gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                    xl: "repeat(5, 1fr)",
                  },
                  gap: { xs: "6px", md: "12px", lg: "14px", xl: "18px" },
                }}
                suppressHydrationWarning
              >
                {cardList?.map((card, index) => (
                  <CardItem key={index} suppressHydrationWarning item={card} />
                ))}
              </GridBox>
              }
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              Item four
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              Item five
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              Item Three
            </CustomTabPanel>
            <CustomTabPanel value={value} index={6}>
              Item Three
            </CustomTabPanel>
            <CustomTabPanel value={value} index={7}>
              Item Three
            </CustomTabPanel>
            <CustomTabPanel value={value} index={8}>
              Item Three
            </CustomTabPanel>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Gallery;
