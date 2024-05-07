"use client";
import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Stack,
  Box,
  Link, Typography,
} from "@mui/material";

import styled from "@emotion/styled";
import img from "@/assets/images/events.png";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "capitalize",
  letterSpacing: "1px",
  color: "#5D596C",
}));

const rows = [
  {
    name: "Dance Festival",
    img: img,
    description: "It is a long established fact that a reader will dstracted...",
    location: "Main dubai down town, burj khalifa 2nd floor,",
    date: "12/05/24",
  },
  {
    name: "Dance Festival",
    img: img,
    description: "It is a long established fact that a reader will dstracted...",
    location: "Main dubai down town, burj khalifa 2nd floor,",
    date: "12/05/24",
  },
  {
    name: "Dance Festival",
    img: img,
    description: "It is a long established fact that a reader will dstracted...",
    location: "Main dubai down town, burj khalifa 2nd floor,",
    date: "12/05/24",
  },
  {
    name: "Dance Festival",
    img: img,
    description: "It is a long established fact that a reader will dstracted...",
    location: "Main dubai down town, burj khalifa 2nd floor,",
    date: "12/05/24",
  },
];

const EventsTable = () => {

  return (
    <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: "350px" }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <CustomTableLabel>Event Name</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Description</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Location</CustomTableLabel>
          </TableCell>
          <TableCell sx={{width: '150px'}}>
            <CustomTableLabel>Event Date</CustomTableLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell
              sx={{ color: "#7367F0", fontSize: "15px", fontWeight: 400 }}
            >
              <Stack direction='row' alignItems='center' gap='10px'>
                <Image priority alt="image" src={row?.img} />
                <Typography variant="body1" color="#000" sx={{fontSize: '14px', letterSpacing: '1px'}}>{row?.name}</Typography>
              </Stack>
            </TableCell>
            <TableCell
              sx={{
                color: "#AEAEAE",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {row.description}
            </TableCell>
            <TableCell>
              <Stack direction='row' alignItems='start' gap='10px'>
                <FaLocationDot color="#AEAEAE" />
                <Typography variant="body1" color="#AEAEAE" sx={{fontSize: '14px', letterSpacing: '1px'}}>{row?.name}</Typography>
              </Stack>
            </TableCell>
            <TableCell
              sx={{ color: "#AEAEAE", fontSize: "14px"}}
            >
                {row?.date}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EventsTable;
