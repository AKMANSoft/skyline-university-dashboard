"use client";
import React, { useState } from "react";
import { CustomCard } from "../styles/Card";
import styled from "@emotion/styled";
import { Box, Grid, Stack, Typography } from "@mui/material";
import {
  AreaOfExpertiseIcon,
  CertificationsIcon,
  EducationIcon,
  LanguageIcon,
  PersonalInfoIcon,
  ReferenceIcon,
  SummaryIcon,
  WorkExpIcon,
} from "@/utils/svg-icons";
import { ResumeBuilderText, ResumeBuilderTitle } from "../styles/Typography";

const CustomStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  padding: '10px',
  cursor: 'pointer',
  textAlign:'center'
}));

const OptionsCard = ({active, setActive}) => {
  return (
    <CustomCard sx={{ py: "22px", minHeight: "945px"}}>
      <ResumeBuilderTitle sx={{ textAlign: "center" }}>Select to Fill Details</ResumeBuilderTitle>
      <ResumeBuilderText sx={{ textAlign: "center", mt: "3px" }}>
        Select and fill details Individually.
      </ResumeBuilderText>

      <Grid container sx={{ mt: "26px" }}>
        <Grid item xs={6} sx={{ aspectRatio: 1.66 }}>
          <CustomStack
            sx={{
              borderLeft: "none",
              borderBottom: `1px solid ${active===1 ? '#00318B' : '#D9D9D9'}`,
              borderRight: `1px solid ${active===1 ? '#00318B' : '#D9D9D9'}`,
            }}
            onClick={() => setActive(1)}
          >
            <PersonalInfoIcon fill={active===1 ? "#00318B" : "#5D586C"} />
            <Typography variant="body1" color={active===1 ? "#00318B" : "#5D586C"} >
              Personal Info
            </Typography>
          </CustomStack>
        </Grid>
        <Grid item xs={6} sx={{ aspectRatio: 1.66 }}>
          <CustomStack
            sx={{
                borderRight: "none",
                borderBottom: `1px solid ${active===2 ? '#00318B' : '#D9D9D9'}`,
                borderLeft: `${active===2 ? '1px solid #00318B' : 'none'}`,
            }}
            onClick={() => setActive(2)}
          >
            <SummaryIcon fill={active===2 ? "#00318B" : "#5D586C"} />
            <Typography variant="body1" color={active===2 ? "#00318B" : "#5D586C"}>
              Summary
            </Typography>
          </CustomStack>
        </Grid>
        <Grid item xs={6} sx={{ aspectRatio: 1.66 }}>
          <CustomStack
            sx={{
                borderLeft: "none",
                borderBottom: `1px solid ${active===3 ? '#00318B' : '#D9D9D9'}`,
                borderRight: `1px solid ${active===3 ? '#00318B' : '#D9D9D9'}`,
            }}
            onClick={() => setActive(3)}
          >
            <EducationIcon fill={active===3 ? "#00318B" : "#5D586C"} />
            <Typography variant="body1" color={active===3 ? "#00318B" : "#5D586C"}>
                Education
            </Typography>
          </CustomStack>
        </Grid>
        <Grid item xs={6} sx={{ aspectRatio: 1.66 }}>
          <CustomStack
            sx={{
                borderRight: "none",
                borderBottom: `1px solid ${active===4 ? '#00318B' : '#D9D9D9'}`,
                borderLeft: `${active===4 ? '1px solid #00318B' : 'none'}`,
            }}
            onClick={() => setActive(4)}
          >
          <WorkExpIcon fill={active===4 ? "#00318B" : "#5D586C"} />
            <Typography variant="body1" color={active===4 ? "#00318B" : "#5D586C"}>
            Work
            Experience
            </Typography>
          </CustomStack>
        </Grid>
        <Grid item xs={6} sx={{ aspectRatio: 1.66 }}>
          <CustomStack
            sx={{
                borderLeft: "none",
                borderBottom: `1px solid ${active===5 ? '#00318B' : '#D9D9D9'}`,
                borderRight: `1px solid ${active===5 ? '#00318B' : '#D9D9D9'}`,
            }}
            onClick={() => setActive(5)}
          >
            <LanguageIcon fill={active===5 ? "#00318B" : "#5D586C"} />
            <Typography variant="body1" color={active===5 ? "#00318B" : "#5D586C"}>
            Language
            </Typography>
          </CustomStack>
        </Grid>
        <Grid item xs={6} sx={{ aspectRatio: 1.66 }}>
          <CustomStack
            sx={{
                borderRight: "none",
                borderBottom: `1px solid ${active===6 ? '#00318B' : '#D9D9D9'}`,
                borderLeft: `${active===6 ? '1px solid #00318B' : 'none'}`,
            }}
            onClick={() => setActive(6)}
          >
          <AreaOfExpertiseIcon fill={active===6 ? "#00318B" : "#5D586C"} />
            <Typography variant="body1" color={active===6 ? "#00318B" : "#5D586C"}>
            Areas of
            Expertise
            </Typography>
          </CustomStack>
        </Grid>
        <Grid item xs={6} sx={{ aspectRatio: 1.66 }}>
          <CustomStack
            sx={{
                borderLeft: "none",
                borderBottom: `1px solid ${active===7 ? '#00318B' : '#D9D9D9'}`,
                borderRight: `1px solid ${active===7 ? '#00318B' : '#D9D9D9'}`,
            }}
            onClick={() => setActive(7)}
          >
          <CertificationsIcon fill={active===7 ? "#00318B" : "#5D586C"} />
            <Typography variant="body1" color={active===7 ? "#00318B" : "#5D586C"}>
            Certifications
            </Typography>
          </CustomStack>
        </Grid>
        <Grid item xs={6} sx={{ aspectRatio: 1.66 }}>
          <CustomStack
            sx={{
                borderRight: "none",
                borderBottom: `1px solid ${active===8 ? '#00318B' : '#D9D9D9'}`,
                borderLeft: `${active===8 ? '1px solid #00318B' : 'none'}`,
            }}
            onClick={() => setActive(8)}
          >
          <ReferenceIcon fill={active===8 ? "#00318B" : "#5D586C"} />
            <Typography variant="body1" color={active===8 ? "#00318B" : "#5D586C"}>
            References
            </Typography>
          </CustomStack>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default OptionsCard;
