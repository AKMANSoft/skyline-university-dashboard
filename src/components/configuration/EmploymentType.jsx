import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Stack,
  MenuItem,
  Menu,
  Button,
} from "@mui/material";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { GoTrash } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import EditEmpTypeModal from "./modals/EditEmpTypeModal";

const EmploymentType = () => {
  const rows = [
    {
      empType: "Part Time",
      createdDate: "09 May 2022",
      status: "Active",
    },
    {
      empType: "Full Time",
      createdDate: "09 May 2022",
      status: "Active",
    },
    {
      empType: "Hybrid",
      createdDate: "09 May 2022",
      status: "Active",
    },
  ];

  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

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
    <EditEmpTypeModal modalType="Edit" open={openEdit} handleClose={handleCloseEdit} />
    <Table sx={{ borderTop: "1px solid #DBDADE" }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel
              active={sortBy === "empType"}
              direction={sortBy === "empType" ? sortDirection : "asc"}
              onClick={() => handleSort("empType")}
              IconComponent={() => (
                <SortIcon active={sortBy === "empType"} direction={sortDirection} />
              )}
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              Employment Type
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === "createdDate"}
              direction={sortBy === "createdDate" ? sortDirection : "asc"}
              onClick={() => handleSort("createdDate")}
              IconComponent={() => (
                <SortIcon
                  active={sortBy === "createdDate"}
                  direction={sortDirection}
                />
              )}
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              Created Date
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
                fontSize: "13px",
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              Status
            </TableSortLabel>
          </TableCell>
          <TableCell
            sx={{
              fontSize: "13px",
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
              sx={{ color: "#6F6B7D", fontSize: "15px", fontWeight: 400 }}
            >
              {row.empType}
            </TableCell>
            <TableCell
              sx={{ color: "#6F6B7D", fontSize: "15px", fontWeight: 500, fontFamily: 'Work Sans' }}
            >
            {row.createdDate}
            </TableCell>
            <TableCell>
            <div>
                <Button
                    onClick={handleClick}
                    sx={{
                        color: row?.status === "Active" ? "#28C76F" : "#F3103C",
                        fontSize: '13px',
                        // width: '78px',
                        height: '24px',
                        padding: '5px 10px',
                        bgcolor: row?.status === "Active" ? 'rgba(40, 199, 111, 0.15)' : "rgba(243, 16, 60, 0.15)",
                        textTransform: 'capitalize',
                    }}
                >
                    {row?.status}
                    <IoIosArrowDown
                        fontSize="18px" 
                        style={{marginLeft: '10px'}} 
                        color={row?.status === "Active" ? "#28C76F" : "#F3103C"}
                    />
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
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
            <TableCell>
              <Stack direction='row' gap='16px' alignItems='center' justifyContent='end'>
                <TbEdit color="#4B465C" fontSize='18px' cursor='pointer' onClick={handleOpenEdit} />
                <GoTrash color="#4B465C" fontSize='18px' cursor='pointer' />
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  );
};

export default EmploymentType;
