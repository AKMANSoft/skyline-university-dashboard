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
import { GoTrash } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import styled from "@emotion/styled";
import img from "@/assets/images/profile.png";
import shoesImg from "@/assets/images/shoes.png";
import { LuEye } from "react-icons/lu";
import CustomProductWraper from "@/components/common/CustomProductWraper";
import { AntPrimarySwitch } from "@/components/styles/Switch";

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#5D596C",
}));

const rows = [
  {
    productId: "#6979",
    category: "Shoes",
    categoryImg: shoesImg,
    qty: 343,
    sku: 343,
    name: "Cristine Easom",
    img: img,
    price: 250,
    status: "Inactive",
    amount: "250",
    stock: true
  },
  {
    productId: "#6979",
    category: "Shoes",
    categoryImg: shoesImg,
    qty: 343,
    sku: 343,
    name: "Cristine Easom",
    img: img,
    price: 250,
    status: "Active",
    amount: "250",
    stock: true
  },
  {
    productId: "#6979",
    category: "Shoes",
    categoryImg: shoesImg,
    qty: 343,
    sku: 343,
    name: "Cristine Easom",
    img: img,
    price: 250,
    status: "Active",
    amount: "250",
    stock: false
  },
  {
    productId: "#6979",
    category: "Shoes",
    categoryImg: shoesImg,
    qty: 343,
    sku: 343,
    name: "Cristine Easom",
    img: img,
    price: 250,
    status: "Active",
    amount: "250",
    stock: false
  },
  {
    productId: "#6979",
    category: "Shoes",
    categoryImg: shoesImg,
    qty: 343,
    sku: 343,
    name: "Cristine Easom",
    img: img,
    price: 250,
    status: "Active",
    amount: "250",
    stock: false
  },
  {
    productId: "#6979",
    category: "Shoes",
    categoryImg: shoesImg,
    qty: 343,
    sku: 343,
    name: "Cristine Easom",
    img: img,
    price: 250,
    status: "Active",
    amount: "250",
    stock: false
  },
];

const ProductTable = () => {
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
            <CustomTableLabel>Product Id</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Product</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Category</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Qty</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Stock</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Sku</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>status</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Price</CustomTableLabel>
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
              sx={{ color: "#6F6B7D", fontSize: "15px", fontWeight: 400 }}
            >
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{ color: "#7367F0", fontSize: "15px", fontWeight: 400 }}
            >
              {row.productId}
            </TableCell>
            <TableCell
              sx={{
                color: "#6F6B7D",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              <CustomProductWraper img={row?.img} name={row?.name} variant={row?.variant} />
            </TableCell>
            <TableCell>
              <Stack direction="row" alignItems="center" gap="8px">
                <Avatar
                  alt={row?.category}
                  src={row?.categoryImg.src}
                  sx={{ width: "38px", height: "38px" }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "#6F6B7D", fontWeight: 500, fontSize: "15px" }}
                >
                  {row.category}
                </Typography>
              </Stack>
            </TableCell>
            <TableCell
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {row.qty}
            </TableCell>
            <TableCell
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              <AntPrimarySwitch checked={row?.stock} />
            </TableCell>
            <TableCell
              sx={{
                color: "#6F6B7D",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {row?.sku}
            </TableCell>
            <TableCell
              sx={{ color: "#28C76F", fontSize: "13px", fontWeight: 500 }}
            >
                <div>
                  <Button
                    onClick={handleClick}
                    sx={{
                      color: row?.status === "Inactive" ? "#EA5455" : "#00CA99",
                      fontSize: "13px",
                      height: "24px",
                      padding: "5px 10px",
                      bgcolor:
                        row?.status === "Active"
                          ? "rgba(0, 202, 153, 0.10)"
                          : "#FCE5E6",
                      textTransform: "capitalize",
                    }}
                  >
                    {row?.status}
                    <IoIosArrowDown
                      fontSize="18px"
                      style={{ marginLeft: "10px" }}
                      color={row?.status === "Inactive" ? "#EA5455" : "#00CA99"}
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
                    <MenuItem onClick={() => handleOptionSelect("Active")}>
                      Active
                    </MenuItem>
                    <MenuItem onClick={() => handleOptionSelect("Inactive")}>
                      Inactive
                    </MenuItem>
                  </Menu>
                </div>
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
                <LuEye color="#4B465C" fontSize="20px" cursor="pointer" />
                <GoTrash color="#4B465C" fontSize="22px" cursor="pointer" />
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
