import styled from "@emotion/styled";
import { Stack, TableCell, TableSortLabel } from "@mui/material";
import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#4B465C",
  fontSize: "13px",
}));

const Tablecell = (props) => {
  return (
    <TableCell>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <CustomTableLabel>{props?.title}</CustomTableLabel>
        <Stack direction="column">
          <FiChevronUp fontSize="18px" fontWeight="600" color="#4B465C" />
          <FiChevronDown
            fontSize="18px"
            fontWeight="600"
            color="#4B465C"
            opacity=".7"
          />
        </Stack>
      </Stack>
    </TableCell>
  );
};

export default Tablecell;
