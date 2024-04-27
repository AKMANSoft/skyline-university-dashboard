import { JobListedIcon } from "@/utils/svg-icons";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const JobCardItem = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "104px",
        p: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "white",
        borderRadius: "6px",
        borderBottom: `2px solid ${props?.borderColor}`,
        boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
      }}
    >
      {props?.title ? (
        <Stack direction="row" gap="10px" alignItems="center">
          <Box
            sx={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              border: "4px solid #00318B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              component="div"
              variant="p"
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "22px",
                color: "#00318B",
              }}
            >
             {props?.total}
            </Typography>
          </Box>
          <Typography
            component="div"
            variant="p"
            sx={{
              fontSize: "15px",
              fontWeight: "500",
              lineHeight: "22px",
              color: "#5D586C",
            }}
          >
            {props?.title}
          </Typography>
        </Stack>
      ) : (
        <Box>
          <Typography
            component="div"
            variant="p"
            sx={{
              fontSize: "22px",
              fontWeight: "600",
              lineHeight: "30px",
              color: "#4B465C",
            }}
          >
            {props?.total}
          </Typography>
          <Typography
            component="div"
            variant="p"
            sx={{
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "22px",
              color: "#4B465C",
            }}
          >
            {props?.status}
          </Typography>
        </Box>
      )}
      <Box>
        <Image src={props?.icon} alt="icon" />
      </Box>
    </Box>
  );
};

export default JobCardItem;
