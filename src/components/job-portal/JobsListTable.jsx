"use client";
import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
} from "@mui/material";

import styled from "@emotion/styled";
import productImg from "@/assets/images/product-img.png";
import avatarImg from "@/assets/images/avatar8.png";
import CustomProductWraper from "@/components/common/CustomProductWraper";
import { BlueButton } from "../styles/Buttons";

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#5D596C",
}));

const rows = [
  {
    id: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Dummy Company",
    img: avatarImg,
    email: 'dummycompany@gmail.com',
    jobTitle: "Front End Developer",
    applications: "5+ Applied",
    date: "19 Nov 2022",
  },
  {
    id: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Dummy Company",
    img: avatarImg,
    email: 'dummycompany@gmail.com',
    jobTitle: "Front End Developer",
    applications: "5+ Applied",
    date: "19 Nov 2022",
  },
  {
    id: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Dummy Company",
    img: avatarImg,
    email: 'dummycompany@gmail.com',
    jobTitle: "Front End Developer",
    applications: "5+ Applied",
    date: "19 Nov 2022",
  },
  {
    id: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Dummy Company",
    img: avatarImg,
    email: 'dummycompany@gmail.com',
    jobTitle: "Front End Developer",
    applications: "5+ Applied",
    date: "19 Nov 2022",
  },
  {
    id: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Dummy Company",
    img: avatarImg,
    email: 'dummycompany@gmail.com',
    jobTitle: "Front End Developer",
    applications: "5+ Applied",
    date: "19 Nov 2022",
  },
];

const JobsListTable = () => {
  return (
    <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: "1000px" }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <CustomTableLabel>id</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Companies</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Job Title</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Applications</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Date Posting</CustomTableLabel>
          </TableCell>
          <TableCell
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              textAlign: "right",
              textTransform: "uppercase",
            }}
          >
            Actions
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
            <TableCell>
              <CustomProductWraper
                name={row.name}
                variant={row.email}
                img={row.img}
              />
            </TableCell>
            <TableCell
              sx={{
                color: "#6F6B7D",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {row.jobTitle}
            </TableCell>
            <TableCell sx={{color: '#00A3FF'}}>
                {row.applications}
            </TableCell>
            <TableCell
              sx={{
                color: "#4B465C",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {row.date}
            </TableCell>
            <TableCell>
              <BlueButton sx={{bgcolor: "#00318B", float: 'right'}}>
                Apply
              </BlueButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default JobsListTable;
