import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import printIcon from "@/assets/icons/printIcon.png";
import groupIcon from "@/assets/icons/groupIcon.png";

const ReviewCard = () => {
  return (
    <Card
      sx={{
        p: "24px",
        width: "100%",
        minHeight: "218px",
        height: "218px",
        boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
      }}
    >
      <Typography
        component="div"
        variant="p"
        sx={{
          fontSize: "18px",
          fontWeight: "600",
          lineHeight: "24px",
          color: "#4B465C",
        }}
      >
        Over All Overview
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="10px"
        sx={{ height: "70%" }}
      >
        <Box sx={{ width: "100%" }}>
          <Stack
            direction="row"
            alignItems="center"
            gap="6px"
            sx={{ mb: "11px" }}
          >
            <Box
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 207, 232, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
              }}
            >
              <Image priority alt="image" src={printIcon} />
            </Box>
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
              Over ALl Overview
            </Typography>
          </Stack>
          <Typography
            component="div"
            variant="p"
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "24px",
              color: "#4B465C",
            }}
          >
            1080
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Box
            sx={{
              width: "1px",
              height: "31px",
              bgcolor: "rgba(76, 78, 100, 0.12)",
            }}
          ></Box>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6D788D",
              fontSize: "11px",
            }}
          >
            VS
          </Box>
          <Box
            sx={{
              width: "1px",
              height: "31px",
              bgcolor: "rgba(76, 78, 100, 0.12)",
            }}
          ></Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="end"
            gap="6px"
            sx={{ mb: "11px" }}
          >
            <Box
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 207, 232, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
              }}
            >
              <Image priority alt="image" src={groupIcon} />
            </Box>
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
              Applied
            </Typography>
          </Stack>
          <Typography
            component="div"
            variant="p"
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "24px",
              color: "#4B465C",
              textAlign: "right",
            }}
          >
            980
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          borderRadius: "20px",
          overflow: "hidden",
          height: "10px",
          width: "100%",
          mt: "17px",
        }}
      >
        <Box
          sx={{
            width: "40%",
            height: "100%",
            bgcolor: "#00CFE8",
          }}
        ></Box>
        <Box
          sx={{
            width: "60%",
            height: "100%",
            bgcolor: "#666CFF",
          }}
        ></Box>
      </Stack>
    </Card>
  );
};

export default ReviewCard;
