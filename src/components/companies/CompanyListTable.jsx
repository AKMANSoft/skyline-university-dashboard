import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Box,
  Stack,
} from "@mui/material";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { LuEye } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

const rows = [
  {
    id: "#5089",
    jobTitle: "PHP Laravel Developer",
    applications: "5+ Applied",
    ShortListed: "2+ Shortlisted",
    postingDate: "09 May 2022",
    status: "Listed",
  },
  {
    id: "#5089",
    jobTitle: "PHP Laravel Developer",
    applications: "5+ Applied",
    ShortListed: "2+ Shortlisted",
    postingDate: "09 May 2022",
    status: "Listed",
  },
  {
    id: "#5089",
    jobTitle: "PHP Laravel Developer",
    applications: "5+ Applied",
    ShortListed: "2+ Shortlisted",
    postingDate: "09 May 2022",
    status: "Close",
  },
  {
    id: "#5089",
    jobTitle: "PHP Laravel Developer",
    applications: "5+ Applied",
    ShortListed: "2+ Shortlisted",
    postingDate: "09 May 2022",
    status: "Listed",
  },
  {
    id: "#5089",
    jobTitle: "PHP Laravel Developer",
    applications: "5+ Applied",
    ShortListed: "2+ Shortlisted",
    postingDate: "09 May 2022",
    status: "Close",
  },
  {
    id: "#5089",
    jobTitle: "PHP Laravel Developer",
    applications: "5+ Applied",
    ShortListed: "2+ Shortlisted",
    postingDate: "09 May 2022",
    status: "Close",
  },
  {
    id: "#5089",
    jobTitle: "PHP Laravel Developer",
    applications: "5+ Applied",
    ShortListed: "2+ Shortlisted",
    postingDate: "09 May 2022",
    status: "Close",
  },
  {
    id: "#5089",
    jobTitle: "PHP Laravel Developer",
    applications: "5+ Applied",
    ShortListed: "2+ Shortlisted",
    postingDate: "09 May 2022",
    status: "Listed",
  },
];

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#4B465C",
}));

const CompanyListTable = () => {
  const router = useRouter()
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

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
    <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: "900px" }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <CustomTableLabel>ID</CustomTableLabel>
          </TableCell>

          <TableCell>
            <CustomTableLabel>Job Title</CustomTableLabel>
          </TableCell>

          <TableCell>
            <CustomTableLabel>Applications</CustomTableLabel>
          </TableCell>

          <TableCell>
            <CustomTableLabel>Short List</CustomTableLabel>
          </TableCell>

          <TableCell>
            <CustomTableLabel>Posting Date</CustomTableLabel>
          </TableCell>

          <TableCell>
            <CustomTableLabel>Status</CustomTableLabel>
          </TableCell>

          <TableCell
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              textAlign: "right",
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
              sx={{ color: "#7367F0", fontSize: "15px", fontWeight: 400 }}
            >
              {row.id}
            </TableCell>
            <TableCell
              sx={{ color: "#4B465C", fontSize: "15px", fontWeight: 400 }}
            >
              {row.jobTitle}
            </TableCell>
            <TableCell
              sx={{
                color: "#00A3FF",
                fontSize: "15px",
                fontWeight: 400,
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => router.push(`/companies/social-company/applicants`)}
            >
              {row.applications}
            </TableCell>
            <TableCell
              sx={{
                color: "#00A3FF",
                fontSize: "15px",
                fontWeight: 400,
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => router.push(`/companies/social-company/shortlist`)}
            >
              {row.ShortListed}
            </TableCell>
            <TableCell
              sx={{ color: "#4B465C", fontSize: "15px", fontWeight: 400 }}
            >
              {row.postingDate}
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  color: row?.status === "Listed" ? "#28C76F" : "#F3103C",
                  fontSize: "13px",
                  fontWeight: 400,
                  bgcolor:
                    row?.status === "Listed"
                      ? "rgba(40, 199, 111, 0.15)"
                      : "rgba(243, 16, 60, 0.15)",
                  padding: "5px 10px",
                  width: "58px",
                  borderRadius: "4px",
                }}
              >
                {row?.status}
              </Box>
            </TableCell>
            <TableCell sx={{ float: "right" }}>
              <Stack direction="row" gap="16px" alignItems="center">
                <TbEdit color="#4B465C" fontSize="22px" cursor="pointer" />
                <GoTrash color="#4B465C" fontSize="22px" cursor="pointer" />
                <LuEye color="#4B465C" fontSize="22px" cursor="pointer" />
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CompanyListTable;
