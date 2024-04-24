"use client";
import React from "react";
import { CustomCard } from "../styles/Card";
import { Box, Stack, Typography } from "@mui/material";

const SearchAppearancceCard = ({title, total, percentage}) => {
  return (
    <CustomCard sx={{ p: "25px 30px", height: '214px' }}>
      <Stack direction="column" justifyContent="space-between" sx={{height: '100%'}}>
        <Typography
          variant="body1"
          color="#4B465C"
          sx={{ fontSize: "18px", fontWeight: 600 }}
        >
          {title}
        </Typography>

        <Box>
        <Stack direction="row" alignItems="end" gap="10px">
          <Typography
            variant="body1"
            color="#4B465C"
            sx={{ fontSize: "40px", fontWeight: 600, lineHeight: "24px" }}
          >
            {total}
          </Typography>

          <Typography
            variant="body1"
            color="#27C500"
            sx={{ fontWeight: 600, lineHeight: "24px", display: 'flex', alignItems: 'end', gap:'4px', mt:'6px' }}
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.11572 0.36499L13.6646 11.708H0.566828L7.11572 0.36499Z"
                fill="#27C500"
              />
            </svg>
            <span>{percentage}%</span>
          </Typography>
        </Stack>
        <Typography
            variant="body1"
            color="#868686"
            sx={{ fontSize: "18px", lineHeight: "24px", mt: '15px' }}
          >
            7 days weakly change
          </Typography>
        </Box>
      </Stack>
    </CustomCard>
  );
};

export default SearchAppearancceCard;
