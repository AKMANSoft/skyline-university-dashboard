import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Box,
  MenuItem,
  Menu,
  Button,
} from "@mui/material";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import DetailModal from "../job-management/DetailModal";
import { IoIosArrowDown } from "react-icons/io";
import CountryModal from "./modals/CountryModal";
import EditCountryModal from "./modals/EditCountryModal";

const CountryMobile = () => {
  const rows = [
    {
      countryCode: "#5089",
      countryName: "Pakistan",
      status: "Active",
    },
    {
      countryCode: "#5089",
      countryName: "Pakistan",
      status: "Active",
    },
    {
      countryCode: "#5089",
      countryName: "Pakistan",
      status: "Active",
    },
    {
        countryCode: "#5089",
        countryName: "Pakistan",
        status: "In-Active",
      },
      {
        countryCode: "#5089",
        countryName: "Pakistan",
        status: "Active",
      },
      {
        countryCode: "#5089",
        countryName: "Pakistan",
        status: "Active",
      },
      {
        countryCode: "#5089",
        countryName: "Pakistan",
        status: "Active",
      },
      {
        countryCode: "#5089",
        countryName: "Pakistan",
        status: "In-Active",
      },
  ];

  const [sortBy, setSortBy] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [sortDirection, setSortDirection] = useState("asc");
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleCloseDropdown();
  };

  const handleSort = (property) => {
    const isAsc = sortBy === property && sortDirection === "asc";
    setSortDirection(isAsc ? "desc" : "asc");
    setSortBy(property);
    // Implement sorting logic here
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
    <>
    <CountryModal open={open} handleClose={handleClose} handleOpenEdit={handleOpenEdit} />
    <EditCountryModal modalType="Edit" open={openEdit} handleClose={handleCloseEdit} />
    
    <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel
              active={sortBy === "countryCode"}
              direction={sortBy === "countryCode" ? sortDirection : "asc"}
              onClick={() => handleSort("countryCode")}
              IconComponent={() => (
                <SortIcon active={sortBy === "countryCode"} direction={sortDirection} />
              )}
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              Country Code
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === "countryName"}
              direction={sortBy === "countryName" ? sortDirection : "asc"}
              onClick={() => handleSort("countryName")}
              IconComponent={() => (
                <SortIcon
                  active={sortBy === "countryName"}
                  direction={sortDirection}
                />
              )}
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              Country Name
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === "status"}
              direction={sortBy === "status" ? sortDirection : "asc"}
              onClick={() => handleSort("status")}
              IconComponent={() => (
                <SortIcon
                  active={sortBy === "jobTitle"}
                  direction={sortDirection}
                />
              )}
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              Status
            </TableSortLabel>
          </TableCell>
          <TableCell
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              textAlign: 'right',
              textTransform: 'uppercase',
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
              sx={{ color: "#6F6B7D", fontSize: "12px", fontWeight: 400, pr: "5px" }}
            >
              {row.countryCode}
            </TableCell>
            <TableCell
              sx={{ color: "#6F6B7D", fontSize: "12px", fontWeight: 500, px: "5px" }}
            >
              {row.countryName}
            </TableCell>
            <TableCell>
                <div>
                <Button
                    onClick={handleClick}
                    sx={{
                        color: row?.status === "Active" ? "#28C76F" : "#F3103C",
                        fontSize: '12px',
                        height: '24px',
                        minWidth: '84px',
                        padding: '3px 5px',
                        bgcolor: row?.status === "Active" ? 'rgba(40, 199, 111, 0.15)' : "rgba(243, 16, 60, 0.15)",
                        textTransform: 'capitalize',
                    }}
                >
                    {row?.status}
                    <IoIosArrowDown
                        fontSize="14px" 
                        style={{marginLeft: '6px'}} 
                        color={row?.status === "Active" ? "#28C76F" : "#F3103C"}
                    />
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseDropdown}
                    PaperProps={{
                        sx: {
                          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                >
                    <MenuItem onClick={() => handleOptionSelect('Active')}>Active</MenuItem>
                    <MenuItem onClick={() => handleOptionSelect('In-Active')}>Inactive</MenuItem>
                </Menu>
                </div>
            </TableCell>
            <TableCell
              sx={{ textAlign: 'center', px: "5px", display: 'flex', alignItems:'center', justifyContent: 'center'}}
            >
              <Box
                sx={{
                    width: '28.7px',
                    height: '28.7px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#DFE5F0',
                    cursor: 'pointer',
                }}
                onClick={handleOpen}
              >
                <LuEye color="#00318B" fontSize='20px' cursor='pointer' />
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  );
};

export default CountryMobile;
