"use client";
import {
  Box,
  Button,
  Card,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import img from "@/assets/images/company-img.png";
import styled from "@emotion/styled";
import { BlueButton } from "@/components/styles/Buttons";
import { CustomDivider } from "@/components/styles/CustomDivider";

const ListText = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 600,
  lineHeight: "22px",
  color: "#4B465C",
}));

const ListValueText = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  lineHeight: "22px",
  color: "#4B465C",
}));

const dataValues = [
  {
    option: "Name",
    value: "Social Company",
  },
  {
    option: "Contact",
    value: "(123) 456-7890",
  },
  {
    option: "Industry",
    value: " It Company",
  },
  {
    option: "Description",
    value: "Description will come here this is an example description",
  },
  {
    option: "Address",
    value: " Dummy address #3 street, town, City",
  },
  {
    option: "Founding Date",
    value: "07-Sep-1995",
  },
  {
    option: "Country",
    value: "USA",
  },
  {
    option: "State",
    value: "Sharjah ",
  },
  {
    option: "Status",
    value: "Active",
  },
];
const DetailsCard = () => {
  return (
    <Card
        sx={{
          p: "24px",
          width: {xs: '100%', sm: '100%', md: "386px"},
          minWidth: "386px",
          minHeight: "826px",
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   justifyContent: "center",
          boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
        }}
      >
        <Box
          sx={{
            width: { xs: "53px", sm: "81.8px" },
            height: { xs: "53px", sm: "81.8px" },
            borderRadius: "50%",
            background: "#D9D9D9",
            mt: "14px",
          }}
        >
          <Image
            src={img}
            alt="image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Typography
          component="div"
          variant="p"
          sx={{
            mt: "16px",
            fontSize: "22px",
            fontWeight: "600",
            lineHeight: "30px",
            color: "#4B465C",
          }}
        >
          Social Company
        </Typography>
        <Typography
          component="div"
          variant="p"
          sx={{
            mt: "16px",
            fontSize: "13px",
            fontWeight: "600",
            lineHeight: "14px",
            color: "#A8AAAE",
          }}
        >
          socialcompany@gmail.com
        </Typography>

        <CustomDivider sx={{ mt: "29px", mb: "24px" }} />
        <Box sx={{ textAlign: "start", width: '100%' }}>
          <Typography
            component="div"
            variant="p"
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "#4B465C",
              textTransform: "uppercase",
              opacity: '.7'
            }}
          >
            Details
          </Typography>

          <Box sx={{ mt: "16px" }}>
            {dataValues?.map((data, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="start"
                sx={{
                  width: "100%",
                  mb: "12px",
                }}
              >
                {data?.option !== "Status" ? (
                  <ListText>{data?.option}: 
                    <span style={{
                      fontSize: '15px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      marginLeft: '1rem',
                      color: '#4B465C',
                      opacity: '.9'
                    }}>
                        {data?.value}
                      </span>
                  </ListText>
                ) : (
                  <ListText sx={{display: 'flex', gap: "1rem"}}>{data?.option}:
                  <Box
                    sx={{
                      // width: "59px",
                      // height: "24px",
                      padding: "5px 10px",
                      bgcolor: "rgba(40, 199, 111, 0.16)",
                      borderRadius: "4px",
                    }}
                  >
                    <ListValueText
                      sx={{
                        maxWidth: "65%",
                        color: "#28C76F !important",
                        fontSize: '13px',
                      }}
                    >
                      {data?.value}
                    </ListValueText>
                  </Box>
                  </ListText>
                )}
              </Stack>
            ))}
          </Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap="16px"
            sx={{ mt: "46px" }}
          >
            <BlueButton
              sx={{
                bgcolor: "#00318B",
              }}
            >
              Edit
            </BlueButton>
            <Button
              sx={{
                bgcolor: "rgba(243, 16, 60, 0.15)",
                color: "#EA5455",
                fontSize: "15px",
                letterSpacing: "0.43px",
                width: "105px",
                textTransform: "capitalize",
              }}
            >
              Suspend
            </Button>
          </Stack>
        </Box>
      </Card>
  )
}

export default DetailsCard
