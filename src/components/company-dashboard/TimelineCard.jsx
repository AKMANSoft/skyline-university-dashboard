'use client'
import React from "react";
import { CustomCard } from "../styles/Card";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import MuiTimeline from "@mui/lab/Timeline";
import { Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { ListIcon } from "@/utils/svg-icons";

const Timeline = styled(MuiTimeline)({
    "& .MuiTimelineItem-root": {
        width: "100%",
        marginLeft: '-15px',
        "&:before": {
          display: "none",
        },
      },
      "& .MuiTimelineConnector-root": {
        height: '100%',
        marginTop: '-10px',
        marginBottom: '-11px',
      },
});

const OrderText = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  fontWeight: 500,
  color: "#5D596C",
}));

const MsgText = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  fontWeight: 400,
  color: "#6F6B7D",
}));

const DateText = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  fontWeight: 400,
  color: "#A5A3AE",
}));

const activities = [
    {
        dotColor: "#FF9F43",
        title: "Job Title",
        date: "Today",
        text: 'You shortlisted Abdul Rehman for the position of Frontend Development'
    },
    {
        dotColor: "#7367F0",
        title: "Job Title",
        date: "2 Day Ago",
        text: 'You shortlisted Abdul Rehman for the position of Frontend Development'
    },
    {
        dotColor: "#00FF0A",
        title: "Job Title",
        date: "Today",
        text: 'You shortlisted Abdul Rehman for the position of Frontend Development'
    },
    {
        dotColor: "#F33838",
        title: "Job Title",
        date: "Today",
        text: 'You shortlisted Abdul Rehman for the position of Frontend Development'
    },
    {
        dotColor: "#F7CA18",
        title: "Job Title",
        date: "Today",
        text: 'You shortlisted Abdul Rehman for the position of Frontend Development'
    },
    {
        dotColor: "#00CFE8",
        title: "Job Title",
        date: "Today",
        text: 'You shortlisted Abdul Rehman for the position of Frontend Development'
    },
    {
        dotColor: "#A8AAAE",
        title: "Job Title",
        date: "Today",
        text: 'You shortlisted Abdul Rehman for the position of Frontend Development'
    }
]

const TimelineCard = () => {
  return (
    <CustomCard sx={{ p: "24px" }}>
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
              }}
            >
              Activity Timeline
            </Typography>
          </Stack>
      <Timeline sx={{ mt: "19px" }}>
        {activities?.map((activity, index) => (
            <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot sx={{backgroundColor: activity.dotColor}} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ mt: 0 }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <OrderText>{activity?.title}</OrderText>
                <DateText>{activity?.date}</DateText>
              </Stack>
              <MsgText>{activity?.text}</MsgText>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </CustomCard>
  );
};

export default TimelineCard;
