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
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

import { GoTrash } from "react-icons/go";
import styled from "@emotion/styled";
import productImg from "@/assets/images/product-img.png";
import avatarImg from "@/assets/images/avatar8.png";
import { LuEye } from "react-icons/lu";
import CustomListAvatar from "@/components/common/CustomListAvatar";
import CustomDropdown from "@/components/common/CustomDropdown";
import CustomProductWraper from "@/components/common/CustomProductWraper";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

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
    variant: "OnePlus",
    productImg: productImg,
    productName: "OnePlus 7Pro",
    productVariant: "OnePlus",
    category: "Smart Phone",
    customerImg: avatarImg,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    variant: "OnePlus",
    productImg: productImg,
    productName: "OnePlus 7Pro",
    productVariant: "OnePlus",
    category: "Smart Phone",
    customerImg: avatarImg,
    payment: "Pending",
    status: "In Process",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    variant: "OnePlus",
    productImg: productImg,
    productName: "OnePlus 7Pro",
    productVariant: "OnePlus",
    category: "Smart Phone",
    customerImg: avatarImg,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    variant: "OnePlus",
    productImg: productImg,
    productName: "OnePlus 7Pro",
    productVariant: "OnePlus",
    category: "Smart Phone",
    customerImg: avatarImg,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    variant: "OnePlus",
    productImg: productImg,
    productName: "OnePlus 7Pro",
    productVariant: "OnePlus",
    category: "Smart Phone",
    customerImg: avatarImg,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
  {
    order: "#6979",
    date: "Apr 15, 2023 ( 10:21 )",
    name: "Cristine Easom",
    variant: "OnePlus",
    productImg: productImg,
    productName: "OnePlus 7Pro",
    productVariant: "OnePlus",
    category: "Smart Phone",
    customerImg: avatarImg,
    payment: "Pending",
    status: "Delivered",
    amount: "250",
  },
];

const OrderListTable = () => {
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
            <CustomTableLabel>date</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>product</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Category</CustomTableLabel>
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
              <CustomProductWraper
                name={row.productName}
                variant={row.variant}
                img={row.productImg}
              />
            </TableCell>
            <TableCell
              sx={{
                color: "#6F6B7D",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {row.category}
            </TableCell>
            <TableCell>
              <CustomListAvatar name={row?.name} img={row?.customerImg} />
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
                <Button
                sx={{
                  color: row?.status==="In Process" ? "#7367F0" : "#00CA99",
                  fontSize: "13px",
                  height: "24px",
                  padding: "5px 10px",
                  bgcolor:
                    row?.status === "In Process"
                      ? "rgba(115, 103, 240, 0.10)"
                      : "rgba(0, 202, 153, 0.10)",
                  textTransform: "capitalize",
                  borderRadius: '100px',
                }}
              >
                {row?.status}
              </Button>
              ) : (
                <div>
                  <Button
                    onClick={handleClick}
                    sx={{
                      color: row?.status==="In Process" ? "#7367F0" : "#00CA99",
                      fontSize: "13px",
                      height: "24px",
                      padding: "5px 10px",
                      bgcolor:
                        row?.status === "In Process"
                          ? "rgba(115, 103, 240, 0.10)"
                          : "rgba(0, 202, 153, 0.10)",
                      textTransform: "capitalize",
                      borderRadius: '100px',
                    }}
                  >
                    {row?.status}
                    <IoIosArrowDown
                      fontSize="14px"
                      style={{ marginLeft: "5px" }}
                      color={row?.status==="In Process" ? "#7367F0" : "#00CA99"}
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
                    <MenuItem onClick={() => handleOptionSelect("In-Process")}>
                      In-Process
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
