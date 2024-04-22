"use client";
import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Stack,
  Checkbox,
  Box,
  Link,
} from "@mui/material";

import { GoTrash } from "react-icons/go";
import styled from "@emotion/styled";
import img from "@/assets/images/profile.png";
import productImg from "@/assets/images/product-img.png";
import avatarImg from "@/assets/images/avatar8.png";
import { LuEye } from "react-icons/lu";
import CustomListAvatar from "@/components/common/CustomListAvatar";
import CustomDropdown from "@/components/common/CustomDropdown";
import CustomProductWraper from "@/components/common/CustomProductWraper";

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#5D596C",
}));

const rows = [
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    payment: "Paid Via Credit",
    status: "Completed",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    payment: "Paid Via Credit",
    status: "In-Process",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    payment: "Paid Via Credit",
    status: "Completed",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    payment: "Paid Via Credit",
    status: "Completed",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    payment: "Paid Via Credit",
    status: "Completed",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    payment: "Paid Via Credit",
    status: "Completed",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    payment: "Paid Via Credit",
    status: "Completed",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    payment: "Paid Via Credit",
    status: "Completed",
    amount: "250",
  },
];

const MyOrderListTable = () => {
  const [sortBy, setSortBy] = useState(null);
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
    <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: "760px" }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <CustomTableLabel>order</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>date</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>payment</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Status</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Amount</CustomTableLabel>
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
              {row.order}
            </TableCell>
            <TableCell
              sx={{
                color: "#6F6B7D",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {row.date}
            </TableCell>
            <TableCell
              sx={{
                color: row?.payment === "COD" ? "#7367F0" : "#00CA99",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {row.payment}
            </TableCell>
            <TableCell
              sx={{ color: row.status==="Completed" ? "#28C76F" : "#7367F0", fontSize: "13px", fontWeight: 500 }}
            >
                <Box
                sx={{
                    width: '96px',
                    height: '27px',
                    bgcolor: row.status==="Completed" ? "rgba(0, 202, 153, 0.10)" : "rgba(115, 103, 240, 0.10)",
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                    {row?.status}
                </Box>
            </TableCell>
            <TableCell
              sx={{
                color: "#6F6B7D",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              $${row.amount}
            </TableCell>
            <TableCell>
              <Stack
                direction="row"
                gap="16px"
                alignItems="center"
                justifyContent="end"
              >
                <Link href={`/alumni-store/my-orders/order-details`}>
                    <LuEye color="#4B465C" fontSize="20px" cursor="pointer" />
                </Link>
                <GoTrash color="#4B465C" fontSize="22px" cursor="pointer" />
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MyOrderListTable;
