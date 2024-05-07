import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Box,
} from "@mui/material";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import DetailModal from "./DetailModal";

const ManagementTableMobile = () => {
  const rows = [
    {
      id: "#5089",
      jobTitle: "PHP Laravel Developer",
      status: "Listed",
    },
    {
      id: "#5089",
      jobTitle: "PHP Laravel Developer",
      status: "Listed",
    },
    {
      id: "#5089",
      jobTitle: "PHP Laravel Developer",
      status: "Close",
    },
    {
        id: "#5089",
        jobTitle: "PHP Laravel Developer",
        status: "Listed",
      },
      {
        id: "#5089",
        jobTitle: "PHP Laravel Developer",
        status: "Close",
      },
      {
        id: "#5089",
        jobTitle: "PHP Laravel Developer",
        status: "Close",
      },
      {
        id: "#5089",
        jobTitle: "PHP Laravel Developer",
        status: "Close",
      },
      {
        id: "#5089",
        jobTitle: "PHP Laravel Developer",
        status: "Listed",
      },
  ];

  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <DetailModal open={open} handleClose={handleClose} />
    
    <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel
              active={sortBy === "id"}
              direction={sortBy === "id" ? sortDirection : "asc"}
              onClick={() => handleSort("id")}
              IconComponent={() => (
                <SortIcon active={sortBy === "id"} direction={sortDirection} />
              )}
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                textTransform: 'uppercase',
                width: '40px'
              }}
            >
              ID
            </TableSortLabel>
          </TableCell>
          <TableCell sx={{minWidth: '140px', px: '5px'}}>
            <TableSortLabel
              active={sortBy === "jobTitle"}
              direction={sortBy === "jobTitle" ? sortDirection : "asc"}
              onClick={() => handleSort("jobTitle")}
              IconComponent={() => (
                <SortIcon
                  active={sortBy === "jobTitle"}
                  direction={sortDirection}
                />
              )}
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              Job Title
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
                width: '50px',
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
              width: '40px',
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
              sx={{ color: "#7367F0", fontSize: "12px", fontWeight: 400, pr: "5px" }}
            >
              {row.id}
            </TableCell>
            <TableCell
              sx={{ color: "#4B465C", fontSize: "12px", fontWeight: 500, px: "5px" }}
            >
              {row.jobTitle}
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  color: row?.status==="Listed" ? "#28C76F": "#F3103C",
                  fontSize: "12px",
                  px: "5px",
                  fontWeight: 400,
                  bgcolor: row?.status === "Listed" ? "rgba(40, 199, 111, 0.15)" : "rgba(243, 16, 60, 0.15)",
                  padding: "5px 10px",
                  width: "58px",
                  borderRadius: '4px',
                }}
              >
                {row?.status}
              </Box>
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

export default ManagementTableMobile;
