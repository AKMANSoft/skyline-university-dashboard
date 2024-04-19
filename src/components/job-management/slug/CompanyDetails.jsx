"use client";
import {
  Box,
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { CustomDivider } from "@/components/styles/CustomDivider";
import DetailsCard from "./DetailCard";

const CustomLabel = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: "#4B465C",
  opacity: ".7",
}));

const CustomValue = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 500,
  color: "#4B465C",
  lineHeight: "24px",
  marginTop: "5px",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 600,
  color: "#4B465C",
  lineHeight: "24px",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: "#4B465C",
  opacity: ".9",
}));

const Bullet = styled(Box)(({ theme }) => ({
  display: "inline-block",
  width: "5px",
  maxWidth: "5px",
  height: "5px",
  maxHeight: "5px",
  borderRadius: "50%",
  backgroundColor: "black",
  marginRight: "12px",
  color: "#4B465C",
  opacity: ".5",
}));

const CompanyDetails = () => {
  return (
    <Stack
      direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
      alignItems="start"
      gap="23px"
    >
      <DetailsCard />
      <Box sx={{ width: "100%" }}>
        <Card
          sx={{
            px: { xs: "20px", sm: "30px" },
            py: {xs:"20px", sm:'24px'},
            boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
            minHeight: "826px",
          }}
        >
          <Typography
            component="div"
            variant="p"
            sx={{
              color: "#4B465C",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "30px",
            }}
          >
            Job Details
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row", lg: "column", xl: "row" }}
            alignItems="center"
            justifyContent="space-between"
            gap={{ xs: "1rem", lg: "1rem", xl: "42px" }}
            sx={{
              mt: "19px",
            }}
          >
            <Stack
              direction={{ xs: "row", sm: "column" }}
              justifyContent={{ xs: "space-between", sm: "start" }}
              alignItems={{xs:'center', sm: 'start'}}
              sx={{ width: "100%" }}
            >
              <CustomLabel
                sx={{
                  textTransform: { xs: "uppercase", sm: "capitalize" },
                  letterSpacing: { xs: "1px", sm: "0px" },
                  fontSize: { xs: "12px", sm: "14px" },
                  maxWidth: { xs: "158px", sm: "auto" },
                  marginTop :{xs:'0px',sm:'5px'}
                }}
              >
                Job Title
              </CustomLabel>
              <CustomValue sx={{fontSize: {xs:'14px', sm:'16px'}}}>Front End Developer</CustomValue>
            </Stack>
            <Stack
              direction={{ xs: "row", sm: "column" }}
              justifyContent={{ xs: "space-between", sm: "start" }}
              alignItems={{xs:'center', sm: 'start'}}
              sx={{ width: "100%" }}
            >
              <CustomLabel
                sx={{
                  textTransform: { xs: "uppercase", sm: "capitalize" },
                  letterSpacing: { xs: "1px", sm: "0px" },
                  fontSize: { xs: "12px", sm: "14px" },
                  maxWidth: { xs: "158px", sm: "auto" },
                  marginTop :{xs:'0px',sm:'5px'}
                }}
              >
                Designation
              </CustomLabel>
              <CustomValue sx={{fontSize: {xs:'14px', sm:'16px'}}}>Manager</CustomValue>
            </Stack>
            <Stack
              direction={{ xs: "row", sm: "column" }}
              justifyContent={{ xs: "space-between", sm: "start" }}
              alignItems={{xs:'center', sm: 'start'}}
              sx={{ width: "100%" }}
            >
              <CustomLabel
                sx={{
                  textTransform: { xs: "uppercase", sm: "capitalize" },
                  letterSpacing: { xs: "1px", sm: "0px" },
                  fontSize: { xs: "12px", sm: "14px" },
                  maxWidth: { xs: "158px", sm: "auto" },
                  marginTop :{xs:'0px',sm:'5px'}
                }}
              >
                Experience
              </CustomLabel>
              <CustomValue sx={{fontSize: {xs:'14px', sm:'16px'}}}>4 Years</CustomValue>
            </Stack>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row", lg: "column", xl: "row" }}
            alignItems="center"
            justifyContent="space-between"
            gap={{ xs: "1rem", lg: "1rem", xl: "42px" }}
            sx={{
              mt: "19px",
            }}
          >
            <Stack
              direction={{ xs: "row", sm: "column" }}
              justifyContent={{ xs: "space-between", sm: "start" }}
              alignItems={{xs:'center', sm: 'start'}}
              sx={{ width: "100%" }}
            >
              <CustomLabel
                sx={{
                  textTransform: { xs: "uppercase", sm: "capitalize" },
                  letterSpacing: { xs: "1px", sm: "0px" },
                  fontSize: { xs: "12px", sm: "14px" },
                  maxWidth: { xs: "158px", sm: "auto" },
                  marginTop :{xs:'0px',sm:'5px'}
                }}
              >
                Employment Type (Full Time/Part Time)
              </CustomLabel>
              <CustomValue sx={{fontSize: {xs:'14px', sm:'16px'}}}>Full Time</CustomValue>
            </Stack>
            <Stack
              direction={{ xs: "row", sm: "column" }}
              justifyContent={{ xs: "space-between", sm: "start" }}
              alignItems={{xs:'center', sm: 'start'}}
              sx={{ width: "100%" }}
            >
              <CustomLabel
                sx={{
                  textTransform: { xs: "uppercase", sm: "capitalize" },
                  letterSpacing: { xs: "1px", sm: "0px" },
                  fontSize: { xs: "12px", sm: "14px" },
                  maxWidth: { xs: "158px", sm: "auto" },
                  marginTop :{xs:'0px',sm:'5px'}
                }}
              >
                Location (Onsite/Remote)
              </CustomLabel>
              <CustomValue sx={{fontSize: {xs:'14px', sm:'16px'}}}>Remote</CustomValue>
            </Stack>
            <Stack
              direction={{ xs: "row", sm: "column" }}
              justifyContent={{ xs: "space-between", sm: "start" }}
              alignItems={{xs:'center', sm: 'start'}}
              sx={{ width: "100%" }}
            >
              <CustomLabel
                sx={{
                  textTransform: { xs: "uppercase", sm: "capitalize" },
                  letterSpacing: { xs: "1px", sm: "0px" },
                  fontSize: { xs: "12px", sm: "14px" },
                  maxWidth: { xs: "158px", sm: "auto" },
                  marginTop :{xs:'0px',sm:'5px'}
                }}
              >
                Budget (Minimum)
              </CustomLabel>
              <CustomValue sx={{fontSize: {xs:'14px', sm:'16px'}}}>$5400</CustomValue>
            </Stack>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row", lg: "column", xl: "row" }}
            alignItems="center"
            justifyContent="space-between"
            gap={{ xs: "1rem", lg: "1rem", xl: "42px" }}
            sx={{
              mt: "19px",
            }}
          >
            <Stack
              direction={{ xs: "row", sm: "column" }}
              justifyContent={{ xs: "space-between", sm: "start" }}
              alignItems={{xs:'center', sm: 'start'}}
              sx={{ width: "100%" }}
            >
              <CustomLabel
                sx={{
                  textTransform: { xs: "uppercase", sm: "capitalize" },
                  letterSpacing: { xs: "1px", sm: "0px" },
                  fontSize: { xs: "12px", sm: "14px" },
                  maxWidth: { xs: "158px", sm: "auto" },
                  marginTop :{xs:'0px',sm:'5px'}
                }}
              >
                Budget (Maximum)
              </CustomLabel>
              <CustomValue sx={{fontSize: {xs:'14px', sm:'16px'}}}>$5400</CustomValue>
            </Stack>
            <Stack
              direction={{ xs: "row", sm: "column" }}
              justifyContent={{ xs: "space-between", sm: "start" }}
              alignItems={{xs:'center', sm: 'start'}}
              sx={{ width: "100%" }}
            >
              <CustomLabel
                sx={{
                  textTransform: { xs: "uppercase", sm: "capitalize" },
                  letterSpacing: { xs: "1px", sm: "0px" },
                  fontSize: { xs: "12px", sm: "14px" },
                  maxWidth: { xs: "158px", sm: "auto" },
                  marginTop :{xs:'0px',sm:'5px'}
                }}
              >
                No of Vacancies
              </CustomLabel>
              <CustomValue sx={{fontSize: {xs:'14px', sm:'16px'}}}>4</CustomValue>
            </Stack>
            <Stack
              direction={{ xs: "row", sm: "column" }}
              justifyContent={{ xs: "space-between", sm: "start" }}
              alignItems={{xs:'center', sm: 'start'}}
              sx={{ width: "100%" }}
            >
              <CustomLabel
                sx={{
                  textTransform: { xs: "uppercase", sm: "capitalize" },
                  letterSpacing: { xs: "1px", sm: "0px" },
                  fontSize: { xs: "12px", sm: "14px" },
                  maxWidth: { xs: "158px", sm: "auto" },
                  marginTop :{xs:'0px',sm:'5px'}
                }}
              >
                Deadline Date
              </CustomLabel>
              <CustomValue sx={{fontSize: {xs:'14px', sm:'16px'}}}>24/07/2024</CustomValue>
            </Stack>
          </Stack>

          <CustomDivider sx={{ my: "24px" }} />

          <Box>
            <Title>About Us</Title>
            <Text sx={{ mt: "10px" }}>
              [Provide a brief description of your company, its mission, and
              values. Highlight any unique aspects that make your company an
              appealing place to work.]
            </Text>
            <Title sx={{ mt: "20px" }}>Job Description</Title>
            <Text sx={{ mt: "10px" }}>
              We are seeking a talented and motivated Backend Developer to join
              our dynamic team. As a Backend Developer, you will be responsible
              for designing, implementing, and maintaining the server-side logic
              of our web applications. You will work closely with our front-end
              developers, ensuring seamless integration of user-facing elements
              with server-side logic.
            </Text>
            <Title sx={{ mt: "20px" }}>Responsibilities</Title>
            <List>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Develop robust, scalable, and high-performance backend systems."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Collaborate with front-end developers to integrate user-facing elements using server-side logic."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Implement security and data protection measures."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Troubleshoot and debug issues to ensure the smooth functioning of the application."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Optimize applications for maximum speed and scalability."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Stay updated on industry trends and advancements to incorporate best practices into our development processes."
                  />
                </ListItemButton>
              </ListItem>
            </List>

            <Title sx={{ mt: "20px" }}>Requirements</Title>
            <List>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Proven experience as a Backend Developer or similar role."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Strong proficiency in server-side languages such as Node.js, Python, or Java."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Experience with database technologies like MySQL, MongoDB, or PostgreSQL."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Familiarity with front-end technologies (HTML, CSS, JavaScript) and integration with backend services."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Understanding of RESTful APIs and microservices architecture."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Knowledge of security best practices for web development."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Excellent problem-solving and communication skills."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Bachelor's degree in Computer Science, Engineering, or related field."
                  />
                </ListItemButton>
              </ListItem>
            </List>

            <Title sx={{ mt: "20px" }}>Preferred Skills</Title>
            <List>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Develop robust, scalable, and high-performance backend systems."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Knowledge of containerization and orchestration tools (Docker, Kubernetes)."
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="Familiarity with version control systems (Git)."
                  />
                </ListItemButton>
              </ListItem>
            </List>

            <Title sx={{ mt: "20px" }}>How to Apply</Title>
            <List>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary='Interested candidates should submit their resume, cover letter, and portfolio (if applicable) to [Your Contact Email]. Please include "Backend Developer Application" in the subject line.'
                  />
                </ListItemButton>
              </ListItem>
            </List>

            <Title sx={{ mt: "20px" }}>Application Deadline</Title>
            <List>
              <ListItem disablePadding sx={{ ml: "-14px" }}>
                <ListItemButton sx={{ cursor: "auto", py: 0 }} disableRipple>
                  <Bullet />
                  <ListItemText
                    sx={{ color: "#4B465C", opacity: ".9" }}
                    style={{ lineHeight: 0, margin: 0 }}
                    primary="[Include a deadline if applicable]."
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Card>
      </Box>
    </Stack>
  );
};

export default CompanyDetails;
