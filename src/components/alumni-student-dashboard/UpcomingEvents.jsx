import React from "react";
import { CustomCard } from "../styles/Card";
import StackBetweenWraper from "../common/StackBetweenWraper";
import { Box, Divider } from "@mui/material";
import EventsTable from "./EventsTable";

const UpcomingEvents = () => {
  return (
    <CustomCard sx={{ py: "30px", maxHeight: '581px', overflow: 'auto' }}>
      <Box sx={{ px: "30px" }}>
        <StackBetweenWraper title="Upcoming Events" btnText="View All Events" />
      </Box>
      <Divider sx={{ mt: "26px" }} />
      <EventsTable />
    </CustomCard>
  );
};

export default UpcomingEvents;
