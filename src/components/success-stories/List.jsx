'use client'
import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Stack,
  Avatar,
  Checkbox,
} from "@mui/material";
import { TbEdit } from "react-icons/tb";
import { GoTrash } from "react-icons/go";
import { LuEye } from "react-icons/lu";
import avatarImg from "@/assets/images/img8.png";
import { BorderSwitch } from "../styles/Switch";
import styled from "@emotion/styled";
import Link from "next/link";

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#5D596C",
}));

const rows = [
  {
    id: 1,
    img: avatarImg,
    title: "Objectives Should Be Stated Clearly",
    description:
      "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
  },
  {
    id: 2,
    img: avatarImg,
    title: "Objectives Should Be Stated Clearly",
    description:
      "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
  },
  {
    id: 3,
    img: avatarImg,
    title: "Objectives Should Be Stated Clearly",
    description:
      "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
  },
  {
    id: 4,
    img: avatarImg,
    title: "Objectives Should Be Stated Clearly",
    description:
      "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
  },
  {
    id: 5,
    img: avatarImg,
    title: "Objectives Should Be Stated Clearly",
    description:
      "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
  },
  {
    id: 5,
    img: avatarImg,
    title: "Objectives Should Be Stated Clearly",
    description:
      "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
  },
  {
    id: 7,
    img: avatarImg,
    title: "Objectives Should Be Stated Clearly",
    description:
      "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
  },
  {
    id: 8,
    img: avatarImg,
    title: "Objectives Should Be Stated Clearly",
    description:
      "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
  },
  {
    id: 9,
    img: avatarImg,
    title: "Objectives Should Be Stated Clearly",
    description:
      "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
  },
  {
    id: 10,
    img: avatarImg,
    title: "Objectives Should Be Stated Clearly",
    description:
      "It is a long established fact that a reader will istracted by the readable content of a page looking at its layout...",
  },
];

const List = () => {
  return (
    <>
      <Table sx={{ minWidth: "950px" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ py: 0, minWidth: { xs: "80px", sm: "150px" } }}>
              <TableSortLabel>
                <Checkbox />
              </TableSortLabel>
            </TableCell>
            <TableCell sx={{ minWidth: { xs: "100px", sm: "150px" } }}>
              <CustomTableLabel>IMAGE</CustomTableLabel>
            </TableCell>
            <TableCell sx={{ minWidth: { xs: "140px", sm: "150px" } }}>
              <CustomTableLabel>Title</CustomTableLabel>
            </TableCell>
            <TableCell sx={{ minWidth: { xs: "150px", sm: "250px" } }}>
              <CustomTableLabel>Description</CustomTableLabel>
            </TableCell>
            <TableCell sx={{ minWidth: "100px" }}>
              <CustomTableLabel>Status</CustomTableLabel>
            </TableCell>
            <TableCell
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#5D596C",
                minWidth: "100px",
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
                sx={{
                  color: "#6F6B7D",
                  fontSize: { xs: "13px", sm: "15px" },
                  fontWeight: 400,
                }}
              >
                <Checkbox />
              </TableCell>
              <TableCell
                sx={{
                  color: "#6F6B7D",
                  fontSize: { xs: "13px", sm: "15px" },
                  fontWeight: 400,
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  variant="square"
                  src={row.img.src}
                  sx={{ width: "58px", height: "43px" }}
                />
              </TableCell>
              <TableCell
                sx={{
                  color: "#6F6B7D",
                  fontSize: { xs: "13px", sm: "15px" },
                  fontWeight: 400,
                }}
              >
                {row.title}
              </TableCell>
              <TableCell
                sx={{
                  color: "#6F6B7D",
                  fontSize: { xs: "13px", sm: "15px" },
                  fontWeight: 500,
                  pr:{xs:'0px', lg:'00px',xl:'120px'}
                }}
              >
                {row.description}
              </TableCell>
              <TableCell>
                <BorderSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
              </TableCell>
              <TableCell>
                <Stack
                  direction="row"
                  gap="16px"
                  alignItems="center"
                  justifyContent="end"
                >
                  <Link href="/website-setup/success-stories/add" >
                  <TbEdit color="#4B465C" fontSize="18px" cursor="pointer" />
                  </Link>
                  <GoTrash color="#4B465C" fontSize="18px" cursor="pointer" />
                  <Link href={`/website-setup/success-stories/${row.title}`}>
                    <LuEye color="#4B465C" fontSize="18px" cursor="pointer" />
                  </Link>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default List;
