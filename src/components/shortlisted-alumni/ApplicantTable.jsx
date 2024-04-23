"use client";
import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Box,
  Stack,
  Typography,
  Avatar,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import pdfImg from "@/assets/images/pdf-img.png"
import img from "@/assets/images/1.png"
import Link from "next/link";
import avatar1 from "@/assets/images/Avatar.png"
import avatar2 from "@/assets/images/Avatar2.png"
import avatar3 from "@/assets/images/Avatar3.png"
import CustomProductWraper from "../common/CustomProductWraper";
import { IoIosArrowDown } from "react-icons/io";
import styled from "@emotion/styled";

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
    fontSize: "13px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#5D596C",
  }));

const ApplicantTable = () => {
  const rows = [
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      status: "Shortlisted",
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      img: img,
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      status: "Shortlisted",
      img: avatar1
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      img: img,
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      appliedDate: "09 May 2022",
      status: "Shortlisted",
      img: avatar2
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      img: img,
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      status: "Shortlisted",
      img: avatar3
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      status: "Shortlisted",
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      appliedDate: "09 May 2022",
      status: "Shortlisted",
      img: avatar3
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      status: "Shortlisted",
      img: avatar1
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      appliedDate: "09 May 2022",
      status: "Shortlisted",
      img: avatar2
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      status: "Shortlisted",
      img: avatar3
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      status: "Shortlisted",
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      appliedDate: "09 May 2022",
      status: "Shortlisted",
      img: avatar3
    },
  ];

  const [sortDirection, setSortDirection] = useState("asc");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleClose();
  };

  return (
    <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: "1100px" }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <CustomTableLabel>Student ID</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Alumni</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Education</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Graduation Year</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Resume</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Applied Date</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Change Status</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>View</CustomTableLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell
              sx={{ color: "#7367F0", fontSize: "15px", fontWeight: 400 }}
            >
              {row.id}
            </TableCell>
            <TableCell
              sx={{ color: "#4B465C", fontSize: "15px", fontWeight: 400 }}
            >
                <CustomProductWraper name={row?.name} variant={row?.email} img={row?.img} />
            </TableCell>
            <TableCell
              sx={{ color: "#4B465C", opacity: '.9', fontSize: "15px", fontWeight: 400 }}
            >
              {row.education}
            </TableCell>
            <TableCell
              sx={{ color: "#4B465C", opacity: '.9', fontSize: "15px", fontWeight: 400 }}
            >
              {row.graduation}
            </TableCell>
            <TableCell
              sx={{ color: "#4B465C", opacity: '.9', fontSize: "15px", fontWeight: 400 }}
            >
                {row?.resume ?
                <Stack direction="row" gap="10px" alignItems="center">
                <Avatar
                  src={pdfImg.src}
                  variant="rounded"
                  sx={{
                    width: '37px',
                    height: '37px'
                  }}
                />
                <Box>
                  <Typography
                    component="div"
                    variant="p"
                    sx={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#4B465C",
                      opacity: '.9',
                      lineHeight: "22px",
                    }}
                  >
                    My Resumes CS
                  </Typography>
                  <Link
                  href="#"
                  download={true}
                  style={{
                    textDecoration: 'none',
                    color: '#00A3FF',
                    fontSize: '13px'
                  }}
                  >
                    Download
                  </Link>
                </Box>
              </Stack>:
              <Typography
              component="div"
              variant="p"
              sx={{
                color: '#F3103C',
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '22px',
                ml: '2rem',
                opacity: '1 !important',
              }}
              >
                Not Available
              </Typography>
                }
            </TableCell>
            <TableCell
              sx={{ color: "#4B465C", opacity: '.9', fontSize: "15px", fontWeight: 400 }}
            >
              {row.appliedDate}
            </TableCell>
            <TableCell
              sx={{ color: "#4B465C", opacity: '.9', fontSize: "15px", fontWeight: 400 }}
            >
              <div>
                  <Button
                    onClick={handleClick}
                    sx={{
                      color: "#FF8A00",
                      fontSize: "13px",
                      height: "24px",
                      padding: "5px 10px",
                      bgcolor:
                        row?.status === "Shortlisted"
                          ? "rgba(255, 138, 0, 0.15)"
                          : "rgba(243, 16, 60, 0.15)",
                      textTransform: "capitalize",
                    }}
                  >
                    {row?.status}
                    <IoIosArrowDown
                      fontSize="18px"
                      style={{ marginLeft: "10px" }}
                      color="#FF8A00"
                    />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                      sx: {
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    <MenuItem onClick={() => handleOptionSelect("In-Progress")}>
                    Shortlisted
                    </MenuItem>
                    <MenuItem onClick={() => handleOptionSelect("Delivered")}>
                      Delivered
                    </MenuItem>
                  </Menu>
                </div>
            </TableCell>
            <TableCell sx={{textAlign: 'right', pr:'1rem'}}>
                <Link
                  href="/shortlisted-alumni/view-profile"
                  download={true}
                  style={{
                    color: '#01328B',
                    fontSize: '14px'
                  }}
                  >
                    View Profile
                  </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ApplicantTable;
