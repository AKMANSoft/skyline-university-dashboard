import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import img from "@/assets/images/avatar5.png";
import img2 from "@/assets/images/company-img2.png";

const topCompanies = [
  {
    title: "Dummy Company",
    applied: "50",
    logo: img,
  },
  {
    title: "Social Company",
    applied: "20",
    logo: img2,
  },
  {
    title: "Example Company",
    applied: "30",
    logo: img,
  },
];

const TopCompanyCard = () => {
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
          color: "#4B465C",
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "24px",
          color: "#4B465C",
        }}
      >
        Top 3 Companies ({" "}
        <span style={{ fontSize: "14px" }}>With Most Applicants</span> )
      </Typography>
      <Box>
        {topCompanies?.map((company, index) => (
          <Stack
            key={index}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap="10px"
            sx={{
              py: "9px",
              borderBottom: "1px solid #DBDADE",
              "&:last-child": {
                borderBottom: "none",
              },
            }}
          >
            <Stack direction="row" alignItems="center" gap="10px">
              <Avatar
                alt="Text"
                sx={{ width: "30px", height: "30px" }}
                variant="circle"
                src={company?.logo.src}
              />
              <Typography
                component="div"
                variant="p"
                sx={{
                  color: "#4B465C",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "22px",
                }}
              >
                {company?.title}
              </Typography>
            </Stack>
            <Typography
              component="div"
              variant="p"
              sx={{
                fontSize: "15px",
                fontWeight: "500",
                lineHeight: "24px",
                color: "#3CCACE",
              }}
            >
              {company?.applied}k Applies
            </Typography>
          </Stack>
        ))}
      </Box>
    </Card>
  );
};

export default TopCompanyCard;
