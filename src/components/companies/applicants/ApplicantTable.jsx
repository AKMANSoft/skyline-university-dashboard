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
} from "@mui/material";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import pdfImg from "@/assets/images/pdf-img.png";
import Link from "next/link";
import avatar1 from "@/assets/images/Avatar.png";
import avatar2 from "@/assets/images/Avatar2.png";
import avatar3 from "@/assets/images/Avatar3.png";
import styled from "@emotion/styled";
import Tablecell from "@/components/common/Tablecell";

const rows = [
  {
    id: "#5089",
    name: "Jamal Kerrod",
    email: "Marge.Jacobson@gmail.com",
    education: "Bachelor in CS",
    graduation: "09 May 2022",
    resume: "My Resumes CS",
    appliedDate: "09 May 2022",
  },
  {
    id: "#5089",
    name: "Jamal Kerrod",
    email: "Marge.Jacobson@gmail.com",
    education: "Bachelor in CS",
    graduation: "09 May 2022",
    resume: "My Resumes CS",
    appliedDate: "09 May 2022",
    img: avatar1,
  },
  {
    id: "#5089",
    name: "Jamal Kerrod",
    email: "Marge.Jacobson@gmail.com",
    education: "Bachelor in CS",
    graduation: "09 May 2022",
    appliedDate: "09 May 2022",
    img: avatar2,
  },
  {
    id: "#5089",
    name: "Jamal Kerrod",
    email: "Marge.Jacobson@gmail.com",
    education: "Bachelor in CS",
    graduation: "09 May 2022",
    resume: "My Resumes CS",
    appliedDate: "09 May 2022",
    img: avatar3,
  },
  {
    id: "#5089",
    name: "Jamal Kerrod",
    email: "Marge.Jacobson@gmail.com",
    education: "Bachelor in CS",
    graduation: "09 May 2022",
    resume: "My Resumes CS",
    appliedDate: "09 May 2022",
  },
  {
    id: "#5089",
    name: "Jamal Kerrod",
    email: "Marge.Jacobson@gmail.com",
    education: "Bachelor in CS",
    graduation: "09 May 2022",
    appliedDate: "09 May 2022",
    img: avatar3,
  },
  {
    id: "#5089",
    name: "Jamal Kerrod",
    email: "Marge.Jacobson@gmail.com",
    education: "Bachelor in CS",
    graduation: "09 May 2022",
    resume: "My Resumes CS",
    appliedDate: "09 May 2022",
    img: avatar1,
  },
  {
    id: "#5089",
    name: "Jamal Kerrod",
    email: "Marge.Jacobson@gmail.com",
    education: "Bachelor in CS",
    graduation: "09 May 2022",
    appliedDate: "09 May 2022",
    img: avatar2,
  },
  {
    id: "#5089",
    name: "Jamal Kerrod",
    email: "Marge.Jacobson@gmail.com",
    education: "Bachelor in CS",
    graduation: "09 May 2022",
    resume: "My Resumes CS",
    appliedDate: "09 May 2022",
    img: avatar3,
  },
  {
    id: "#5089",
    name: "Jamal Kerrod",
    email: "Marge.Jacobson@gmail.com",
    education: "Bachelor in CS",
    graduation: "09 May 2022",
    resume: "My Resumes CS",
    appliedDate: "09 May 2022",
  },
  {
    id: "#5089",
    name: "Jamal Kerrod",
    email: "Marge.Jacobson@gmail.com",
    education: "Bachelor in CS",
    graduation: "09 May 2022",
    appliedDate: "09 May 2022",
    img: avatar3,
  },
];


const ApplicantTable = () => {

  return (
    <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: "1100px" }}>
      <TableHead>
        <TableRow>
          <Tablecell title="Student ID" />
          {/* <TableCell>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <CustomTableLabel></CustomTableLabel>
              <Stack direction="column">
                <FiChevronUp fontSize="18px" fontWeight="600" color="#4B465C" />
                <FiChevronDown
                  fontSize="18px"
                  fontWeight="600"
                  color="#4B465C"
                  opacity=".7"
                />
              </Stack>
            </Stack>
          </TableCell> */}
          <Tablecell title="Alumni" />
          <Tablecell title="Education" />
          <Tablecell title="Graduation Year" />
          <Tablecell title="Resume" />
          <Tablecell title="Applied Date" />
          <Tablecell title="View" />
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell
              sx={{ color: "#7367F0", fontSize: "15px", fontWeight: 400 }}
            >
              {row.id}
            </TableCell>
            <TableCell
              sx={{ color: "#4B465C", fontSize: "15px", fontWeight: 400 }}
            >
              <Stack direction="row" gap="10px" alignItems="center">
                <Avatar
                  variant="circle"
                  src={row?.img ? row?.img?.src : "/static/images/text.png"}
                  sx={{
                    bgcolor: "rgba(115, 103, 240, 0.16)",
                    color: "#7367F0",
                    width: "38px",
                    height: "38px",
                  }}
                >
                  {row?.name?.split(" ")?.[0]?.charAt(0) +
                    row?.name?.split(" ")?.[1]?.charAt(0)}
                </Avatar>
                <Box>
                  <Typography
                    component="div"
                    variant="p"
                    sx={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#4B465C",
                      opacity: ".7",
                      lineHeight: "22px",
                    }}
                  >
                    Jamal Kerrod
                  </Typography>
                  <Typography
                    component="div"
                    variant="p"
                    sx={{
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "#4B465C",
                      opacity: ".5",
                      lineHeight: "20px",
                    }}
                  >
                    Marge.Jacobson@gmail.com
                  </Typography>
                </Box>
              </Stack>
            </TableCell>
            <TableCell
              sx={{
                color: "#4B465C",
                opacity: ".7",
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              {row.education}
            </TableCell>
            <TableCell
              sx={{
                color: "#4B465C",
                opacity: ".7",
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              {row.graduation}
            </TableCell>
            <TableCell
              sx={{
                color: "#4B465C",
                opacity: ".7",
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              {row?.resume ? (
                <Stack direction="row" gap="10px" alignItems="center">
                  <Avatar
                    src={pdfImg.src}
                    variant="rounded"
                    sx={{
                      width: "37px",
                      height: "37px",
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
                        opacity: ".7",
                        lineHeight: "22px",
                      }}
                    >
                      My Resumes CS
                    </Typography>
                    <Link
                      href="#"
                      download={true}
                      style={{
                        textDecoration: "none",
                        color: "#00A3FF",
                        fontSize: "13px",
                      }}
                    >
                      Download
                    </Link>
                  </Box>
                </Stack>
              ) : (
                <Typography
                  component="div"
                  variant="p"
                  sx={{
                    color: "#F3103C",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    ml: "2rem",
                    opacity: "1 !important",
                  }}
                >
                  Not Available
                </Typography>
              )}
            </TableCell>
            <TableCell
              sx={{
                color: "#4B465C",
                opacity: ".7",
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              {row.appliedDate}
            </TableCell>
            <TableCell sx={{ textAlign: "right" }}>
              <Link
                href="#"
                download={true}
                style={{
                  color: "#01328B",
                  fontSize: "14px",
                  fontWeight: 600,
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
