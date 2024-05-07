// ** MUI Imports
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CustomCard } from "@/components/styles/Card";
import Image from "next/image";
import icon from "@/assets/icons/rc-icon2.png";

const VerticalCustomersCard = () => {
  return (
    <CustomCard sx={{ maxHeight: "218px", height: "218px", p: "24px" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Image priority src={icon} alt="image" />
        <Typography
          variant="h5"
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "24px",
            color: "#4B465C",
            mt: "14px",
          }}
        >
          Customers
        </Typography>
        <Typography variant="body2" sx={{ mb: 1, color: "text.disabled" }}>
          Overall
        </Typography>
        <Typography
          sx={{
            mb: 3.5,
            color: "text.secondary",
            fontSize: "15px",
            fontWeight: 400,
          }}
        >
          1.28k
        </Typography>
      </CardContent>
    </CustomCard>
  );
};

export default VerticalCustomersCard;
