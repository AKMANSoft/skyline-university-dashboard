"use client";
import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Stack,
  Tabs,
  Tab,
  InputLabel,
  TextField,
  OutlinedInput,
  IconButton,
  InputAdornment,
  Link,
} from "@mui/material";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import bgImg from "@/assets/register-bg.png";
import logo from "/public/SkylinesLogo.png";
import img from "@/assets/images/img5.png";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeOff } from "react-icons/lu";
import { BlueButton } from "@/components/styles/Buttons";

const tabsArr = ["Sign In As Alumni", "Sign In As Admin"];

const BackgroundImage = styled(Box)({
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  background: `url(${bgImg.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
});

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
          <Typography component='div'>{children}</Typography>
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

const Page = () => {
  const [value, setValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <main>
      <Box
        sx={{
          width: "100%",
          height: { xs: "auto", sm: "100vh" },
          minHeight: "100vh",
          backgroundColor: "#01328B",
          py: "21px",
        }}
      >
        <BackgroundImage sx={{ overflow: "auto" }}>
          <Box
            sx={{
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "0",
              top: "0",
              background: "white",
              opacity: "0.8",
              zIndex: 0,
            }}
          ></Box>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent={{ xs: "start", sm: "space-around" }}
            alignItems="center"
            sx={{
              height: "100%",
              zIndex: 99,
              px: { xs: "26px", sm: "0px" },
            }}
          >
            <Box
              sx={{
                width: { xs: "145px", sm: "218px", md: "318px" },
                height: { xs: "119px", sm: "180px", md: "260px" },
                my: { xs: "55px", sm: 0 },
                zIndex: 999,
              }}
            >
              <Image
                src={logo}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Card
              sx={{
                p: { xs: "29px", sm: "33px", md: "43px", lg: "73px" },
                width: { xs: "100%", sm: "420px", md: "470px", lg: "570px" },
                height: { xs: "497px", sm: "520px", md: "560px", lg: "610px" },
                borderRadius: "10px",
                // border: '3px solid rgba(0, 49, 139, 0.15)',
                opacity: 1,
                zIndex: 999,
                background: `url(${img.src}) lightgray 50% / cover no-repeat`,
              }}
            >
              <Stack direction="row" alignItems="center" gap="10px">
                <Typography
                  component="div"
                  sx={{
                    color: "#4B465C",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "22px",
                    mt: 1,
                    minWidth: "70px",
                  }}
                >
                  Sign In
                </Typography>
                <svg
                  style={{ marginTop: "10px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="345"
                  height="13"
                  viewBox="0 0 345 13"
                  fill="none"
                >
                  <path
                    d="M344.623 6.56506L334.623 0.791561V12.3386L344.623 6.56506ZM0.40625 7.56506H3.37364V5.56506H0.40625V7.56506ZM9.30841 7.56506H15.2432V5.56506H9.30841V7.56506ZM21.178 7.56506H27.1127V5.56506H21.178V7.56506ZM33.0475 7.56506H38.9823V5.56506H33.0475V7.56506ZM44.917 7.56506H50.8518V5.56506H44.917V7.56506ZM56.7866 7.56506H62.7214V5.56506H56.7866V7.56506ZM68.6561 7.56506H74.5909V5.56506H68.6561V7.56506ZM80.5257 7.56506H86.4604V5.56506H80.5257V7.56506ZM92.3952 7.56506H98.33V5.56506H92.3952V7.56506ZM104.265 7.56506H110.2V5.56506H104.265V7.56506ZM116.134 7.56506H122.069V5.56506H116.134V7.56506ZM128.004 7.56506H133.939V5.56506H128.004V7.56506ZM139.873 7.56506H145.808V5.56506H139.873V7.56506ZM151.743 7.56506H157.678V5.56506H151.743V7.56506ZM163.612 7.56506H169.547V5.56506H163.612V7.56506ZM175.482 7.56506H181.417V5.56506H175.482V7.56506ZM187.352 7.56506H193.286V5.56506H187.352V7.56506ZM199.221 7.56506H205.156V5.56506H199.221V7.56506ZM211.091 7.56506H217.025V5.56506H211.091V7.56506ZM222.96 7.56506H228.895V5.56506H222.96V7.56506ZM234.83 7.56506H240.764V5.56506H234.83V7.56506ZM246.699 7.56506H252.634V5.56506H246.699V7.56506ZM258.569 7.56506H264.504V5.56506H258.569V7.56506ZM270.438 7.56506H276.373V5.56506H270.438V7.56506ZM282.308 7.56506H288.243V5.56506H282.308V7.56506ZM294.177 7.56506H300.112V5.56506H294.177V7.56506ZM306.047 7.56506H311.982V5.56506H306.047V7.56506ZM317.917 7.56506H323.851V5.56506H317.917V7.56506ZM329.786 7.56506H335.721V5.56506H329.786V7.56506Z"
                    fill="#4B465C"
                  />
                </svg>
              </Stack>

              <Box
                sx={{
                  width: "100%",
                  border: "2px solid #00318B",
                  height: "55px",
                  p: { xs: "6px", sm: "8px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  overflowX: "auto",
                  overflowY: "hidden",
                  borderRadius: "10px",
                  mt: { xs: "18px", sm: "25px" },
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  sx={{
                    minHeight: "38px",
                    height: "38px",
                    width: "100%",
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
                        borderRadius: "6px",
                        px: { xs: "15px", sm: "10px" },
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        textTransform: "capitalize",
                        width: "50%",
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
                    mt: { xs: "12px", sm: "16px" },
                    "& .css-19kzrtu": {
                      px: "0px !important",
                    },
                    "& .css-1phy807": {
                      pt: "12px !important",
                    },
                  }}
                >
                  <Typography
                    component='div'
                    sx={{
                      color: "#5D596C",
                      fontSize: { xs: "10px", sm: "14px" },
                      fontWeight: 400,
                      lineHeight: { xs: "13.922px", sm: "18px" },
                    }}
                  >
                    In publishing and graphic design, Lorem ipsum placeholder
                    text commonly used to demonstrate
                  </Typography>

                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: "450px",
                      mt: { xs: "22px", sm: "30px" },
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{
                        color: "#5D596C",
                        fontSize: "13px",
                        fontWeight: 400,
                        mb: "11px",
                        lineHeight: "19px",
                      }}
                    >
                      Enter Your Email Address
                    </InputLabel>
                    <TextField
                      id="outlined-basic"
                      placeholder="Alumni@gmail.com"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        sx: {
                          height: {
                            xs: "38px !important",
                            sm: "42px !important",
                          },
                        },
                      }}
                      sx={{
                        width: "100%",
                        borderRadius: "6px",
                        bgcolor: "white",
                      }}
                    />
                  </Box>

                  <Box sx={{ width: "100%", maxWidth: "450px", mt: "21px" }}>
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{
                        color: "#5D596C",
                        fontSize: "13px",
                        fontWeight: 400,
                        mb: "11px",
                        lineHeight: "19px",
                      }}
                    >
                      Enter Your Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Company1234"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleTogglePassword}
                            edge="end"
                          >
                            {showPassword ? <LuEyeOff /> : <IoEyeOutline />}
                          </IconButton>
                        </InputAdornment>
                      }
                      sx={{
                        width: "100%",
                        height: { xs: "38px", sm: "42px" },
                        borderRadius: "6px",
                        bgcolor: "white",
                      }}
                      label="Password"
                    />
                  </Box>
                  <Stack direction="row" justifyContent="end">
                    <Link
                      href="#"
                      sx={{
                        textDecoration: "none",
                        color: "#00318B",
                        fontSize: "13px",
                        fontWeight: 400,
                        lineHeight: "19px",
                        mt: "11px",
                      }}
                    >
                      Forget Password?
                    </Link>
                  </Stack>
                  <Box sx={{ mt: "18px" }}>
                    <BlueButton
                      sx={{
                        background:
                          "var(--Gradient, linear-gradient(72deg, #00318B 22.16%, #2C549E 76.47%))",
                        borderRadius: "6px",
                        width: "100%",
                      }}
                    >
                      Sign In
                    </BlueButton>
                  </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={8}>
                  Item Three
                </CustomTabPanel>
              </Box>
            </Card>
          </Stack>
        </BackgroundImage>
      </Box>
    </main>
  );
};

export default Page;
