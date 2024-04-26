"use client";
import React from "react";
import { Stack, Box, Avatar } from "@mui/material";
import { CompanyCard } from "../styles/Card";
import { CustomRowStack } from "../styles/Stack";
import {
  CardText,
  CompanyJobText,
  CompanySubTitle,
  CompanyTitle,
  CountryTitle,
} from "../styles/Typography";
import { CustomDivider } from "../styles/CustomDivider";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";

const CustomDot = styled(Box)(({ theme }) => ({
  width: '7.6px',
  height: '7.6px',
  minHeight: '7.6px',
  minWidth: '7.6px',
  borderRadius: '50%'
}));

const CardItem = ({ company }) => {
  const router = useRouter();
  return (
    <CompanyCard
      sx={{ cursor: "pointer" }}
      onClick={() => router.push(`/companies/social-company`)}
    >
      <CustomRowStack
        sx={{
          padding: {
            xs: "0px 12px",
            sm: "0px 8px",
            md: "0px 14px",
            lg: "0px 18px",
            xl: "0px 24px",
          },
        }}
      >
        <Stack direction="row" gap="11px">
          <Avatar
            sx={{ width: "45px", height: "45px" }}
            alt="Remy Sharp"
            src={company?.logo?.src}
          />
          <Box>
            <CompanyTitle>{company?.title}</CompanyTitle>
            <Stack direction="row">
              <CompanySubTitle
                sx={{ color: "#4B465C", fontWeight: "600 !important" }}
              >
                Industry:
              </CompanySubTitle>
              <CompanySubTitle sx={{ color: "#4B465C" }}>
                {company?.subTitle}
              </CompanySubTitle>
            </Stack>
          </Box>
        </Stack>
        <Stack
          direction="row"
          gap="13px"
          alignItems="start"
          sx={{
            bgcolor: "rgba(217, 217, 217, 0.50)",
            p: "4px 10px",
            borderRadius: "5px",
          }}
        >
          <Avatar
            sx={{ width: "22.8px", height: "22.8px" }}
            alt="Remy Sharp"
            src={company?.countryLogo.src}
          />
          <CountryTitle>{company?.country}</CountryTitle>
        </Stack>
      </CustomRowStack>
      <Box
        sx={{
          mt: "14px",
          mb: "15px",
          padding: {
            xs: "0px 12px",
            sm: "0px 8px",
            md: "0px 14px",
            lg: "0px 18px",
            xl: "0px 24px",
          },
        }}
      >
        <CardText>{company?.text}</CardText>
      </Box>
      <CustomDivider />
      <CustomRowStack
        sx={{
          padding: {
            xs: "12px 12px",
            sm: "12px 8px",
            md: "12px 14px",
            lg: "12px 18px",
            xl: "12px 24px",
          },
        }}
      >
        <Stack direction="row" columnGap="5px" alignItems="center">
          <CustomDot sx={{ bgcolor: "#826AF9 !important" }} />
          <CompanyJobText>Job Posted: {company?.posted}</CompanyJobText>
        </Stack>
        <Stack direction="row" columnGap="5px" alignItems="center">
          <CustomDot sx={{ bgcolor: "#3CCACE" }} />
          <CompanyJobText>Applied: {company?.applied}</CompanyJobText>
        </Stack>
        <Stack direction="row" columnGap="5px" alignItems="center">
          <CustomDot sx={{ bgcolor: "#46B6AF" }} />
          <CompanyJobText>Shortlisted: {company?.shortlisted}</CompanyJobText>
        </Stack>
      </CustomRowStack>
      <CustomDivider />

      <Box
        sx={{
          padding: {
            xs: "0px 12px",
            sm: "0px 8px",
            md: "0px 14px",
            lg: "0px 18px",
            xl: "0px 24px",
          },
          mt: "20px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            width: "100%",
            height: "10px",
            borderRadius: "30px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "40%",
              height: "100%",
              bgcolor: "#3C88CE",
            }}
          ></Box>
          <Box
            sx={{
              width: "30%",
              height: "100%",
              bgcolor: "#3CCACE",
            }}
          ></Box>
          <Box
            sx={{
              width: "30%",
              height: "100%",
              bgcolor: "#46B6AF",
            }}
          ></Box>
        </Stack>
      </Box>
    </CompanyCard>
  );
};

export default CardItem;
