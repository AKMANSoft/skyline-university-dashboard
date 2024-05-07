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
  Avatar,
  Typography,
  MenuItem,
  Menu,
  Button,
  Checkbox,
} from "@mui/material";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { GoTrash } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import styled from "@emotion/styled";
import img from "@/assets/images/profile.png";
import { LuEye } from "react-icons/lu";
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
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    img: img,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    img: img,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    img: img,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    img: img,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    img: img,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    img: img,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    img: img,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    img: img,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    img: img,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    img: img,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    img: img,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
];

const OrderListTable = () => {
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

  const SortIcon = ({ active, direction }) => {
    if (!active) return null;

    if (sortDirection === "asc") {
      return <FiChevronUp />;
    } else {
      return <FiChevronDown />;
    }
  };
  return (
    <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: "1000px" }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <CustomTableLabel>
              <Checkbox />
            </CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>order</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>date & Time</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>customers</CustomTableLabel>
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
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell
              sx={{ color: "#6F6B7D", fontSize: "15px", fontWeight: 400 }}
            >
              <Checkbox />
            </TableCell>
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
            <TableCell>
              <Stack direction="row" alignItems="center" gap="8px">
                <Avatar
                  alt={row?.name}
                  src={row.src}
                  sx={{ width: "38px", height: "38px" }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "#6F6B7D", fontWeight: 500, fontSize: "15px" }}
                >
                  {row.name}
                </Typography>
              </Stack>
            </TableCell>
            <TableCell
              sx={{
                color: row?.payment === "Pending" ? "#FF9F43" : "#00CA99",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {row.payment}
            </TableCell>
            <TableCell
              sx={{ color: "#28C76F", fontSize: "13px", fontWeight: 500 }}
            >
              {row?.status === "Delivered" ? (
                row?.status
              ) : (
                <div>
                  <Button
                    onClick={handleClick}
                    sx={{
                      color: "#7367F0",
                      fontSize: "13px",
                      height: "24px",
                      padding: "5px 10px",
                      bgcolor:
                        row?.status === "Active"
                          ? "rgba(40, 199, 111, 0.15)"
                          : "rgba(243, 16, 60, 0.15)",
                      textTransform: "capitalize",
                    }}
                  >
                    {row?.status}
                    <IoIosArrowDown
                      fontSize="18px"
                      style={{ marginLeft: "10px" }}
                      color="#7367F0"
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
                      In-Progress
                    </MenuItem>
                    <MenuItem onClick={() => handleOptionSelect("Delivered")}>
                      Delivered
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </TableCell>
            <TableCell
              sx={{
                color: "#6F6B7D",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              ${row.amount}
            </TableCell>
            <TableCell>
              <Stack
                direction="row"
                gap="16px"
                alignItems="center"
                justifyContent="end"
              >
                <Link href={`/dashboards/orders/order-details`}>
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

export default OrderListTable;
