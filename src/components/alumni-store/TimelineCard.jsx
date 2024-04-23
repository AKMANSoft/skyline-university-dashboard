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

const TimelineCard = () => {
  return (
    <CustomCard sx={{ p: "24px", mt: "24px", height: '434px' }}>
      <Typography
        variant="body2"
        sx={{ fontSize: "18px", fontWeight: 500, color: "#5D596C" }}
      >
        Shipping activity
      </Typography>
      <Timeline sx={{ mt: "19px" }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
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
              <OrderText>Order was placed (Order ID: #32543)</OrderText>
              <DateText>Tuesday 11:29 AM</DateText>
            </Stack>
            <MsgText>Your order has been placed successfully</MsgText>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ mt: 0 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <OrderText>Dispatched</OrderText>
              <DateText>Thursday 11:29 AM</DateText>
            </Stack>
            <MsgText>Item has been picked up by courier</MsgText>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{color: "#A8AAAE"}} />
          </TimelineSeparator>
          <TimelineContent sx={{ mt: 0 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <OrderText>Delivery</OrderText>
              <DateText>Tuesday 11:29 AM</DateText>
            </Stack>
            <MsgText>Package will be delivered by tomorrow</MsgText>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </CustomCard>
  );
};

export default TimelineCard;
