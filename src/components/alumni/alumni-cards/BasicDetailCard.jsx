"use client";
import styled from "@emotion/styled";
import { Avatar, Box, Card, Link, Stack, Typography } from "@mui/material";
import React from "react";
import img from "@/assets/images/avatar4.png";
import { CustomDivider } from "@/components/styles/CustomDivider";

const skillsArr = [
  "Business Development",
  "Business Development",
  "Business Development",
];

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#4B465C",
  fontWeight: 600,
  lineHeight: "30px",
  textTransform: "capitalize",
}));

const ListText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: "#4B465C",
  fontWeight: 400,
  lineHeight: "40px",
}));

const BasicDetailCard = () => {
  return (
    <Card
      sx={{
        px: "30px",
        py: "22px",
        boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
        minHeight: '758px',
      }}
    >
      <CardTitle>Basic Details</CardTitle>
      <Stack direction="row" alignItems="center" gap="19px" sx={{ mt: "17px" }}>
        <Avatar
          alt="Remy Sharp"
          sx={{
            width: "82px",
            height: "82px",
            cursor: "pointer",
          }}
          src={img.src}
        />
        <Box>
          <Typography
            component="div"
            variant="p"
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              textTransform: "capitalize",
              color: "#000",
            }}
          >
            John Matt
          </Typography>
          <Typography
            component="div"
            variant="p"
            sx={{
              fontSize: "13px",
              fontWeight: 400,
              textTransform: "capitalize",
              color: "#6F6B7D",
              lineHeight: "20px",
            }}
          >
            Entrepreneur, Innovator, Tech Visionary, Award Winner
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="19px"
        sx={{ mt: "20px" }}
      >
        <Typography
          component="div"
          variant="p"
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "capitalize",
            color: "#4B465C",
            lineHeight: "20px",
          }}
        >
          Dubai, United Arab Emirates
        </Typography>
        <Link
          sx={{
            color: "#00318B",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Contact Info
        </Link>
      </Stack>
      <CustomDivider sx={{ my: "20px" }} />
      <Stack 
        direction={{xs: 'column',md: 'row',lg: 'column', xl: "row"}} 
        alignItems={{xs:'start',md: 'center',lg:'start',xl:"center"}} 
        gap={{xs:'0px',md: '66px',lg:' 0px',xl:"66px"}}
        >
        <Stack direction="row" alignItems="center" gap="20px">
          <ListText
            sx={{
              opacity: ".6",
            }}
          >
            Emirates ID:
          </ListText>
          <ListText>765-1234-1237677-1</ListText>
        </Stack>
        <Stack direction="row" alignItems="center" gap="20px">
          <ListText
            sx={{
              opacity: ".6",
            }}
          >
            Valid driving License:
          </ListText>
          <ListText>DL-1420110012345 </ListText>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        columnGap="20px"
        // sx={{mt: '20px'}}
      >
        <ListText
          sx={{
            opacity: ".6",
          }}
        >
          Visa Status
        </ListText>
        <ListText
          component="div"
          variant="p"
          sx={{
            color: "#00CA99 !important",
          }}
        >
          Active
        </ListText>
      </Stack>
      <CustomDivider sx={{ my: "20px" }} />
      <Typography
        component="div"
        variant="p"
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "20px",
          color: "#000",
        }}
      >
        About
      </Typography>
      <Box sx={{ mt: "15px", mb: '17px' }}>
        <Typography
          component="div"
          variant="p"
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#6F6B7D",
          }}
        >
          With over 20 years of experience in the software industry, I am the
          CEO of CodeLabs Private Limited, a leading firm in technology
          consulting and solutions. I also serve as a Director at S E T I
          GENERAL TRADING L.L.C., where I leverage my skills in software project
          management, information technology, and new business development to
          assist businesses in achieving their strategic objectives and
          fostering growth.
          <br />
          <br />
          My passion for collaboration, innovation, and impact drives my
          leadership style and vision. At CodeLabs, I lead a team of brilliant
          developers and business process experts who develop innovative
          software solutions that transform business operations and help
          individuals and organizations realize their utmost potential. I am
          also a member of the International Trade Council, where I connect with
          fellow professionals who are enthusiastic about the evolving landscape
          of technology and who share my commitment to shaping a future where
          technology continuously enhances our capabilities and achievements.
        </Typography>
      </Box>
      <Typography
        component="div"
        variant="p"
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "20px",
          color: "#000",
        }}
      >
        Skills
      </Typography>
      <Stack direction="row" gap="20px" alignItems="center" sx={{ mt: "6px", flexWrap: 'wrap' }}>
        {skillsArr?.map((skill, index) => (
          <Box
            key={index}
            sx={{
              p: "3px 12px",
              borderRadius: "100px",
              bgcolor: "rgba(217, 217, 217, 0.20)",
              color: "#6F6B7D",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              border: "1px solid rgba(217, 217, 217, 0.50)",
            }}
          >
            {skill}
          </Box>
        ))}
      </Stack>
    </Card>
  );
};

export default BasicDetailCard;
