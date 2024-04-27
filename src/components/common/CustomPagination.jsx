const { Button } = require("@mui/material");

const CustomPagination = ({ type, onClick, disabled }) => {
  const isPrevious = type === "previous";
  const label = isPrevious ? "Previous" : "Next";

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      size="small"
      sx={{
        textTransform: "none",
        color: "#000", // Customize button color as needed
      }}
    >
      {label}
    </Button>
  );
};

export default CustomPagination;