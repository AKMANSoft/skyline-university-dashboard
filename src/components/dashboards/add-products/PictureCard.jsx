import { FileUploadBox } from "@/components/styles/Box";
import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import img1 from "@/assets/images/img2.png";
import { CustomCard } from "@/components/styles/Card";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const PictureCard = (props) => {
  if (!props) return null;

  return (
    <CustomCard sx={{ p: "24px" }}>
      <Typography variant="body1" color="#5D596C" sx={{ fontSize: "18px" }}>
        Product Pictures
      </Typography>
      <Box sx={{ mt: "24px" }}>
        <label>
          <input type="file" hidden />
          <FileUploadBox>
            <Stack
              direction="column"
              gap="22px"
              alignItems="center"
              justifyContent="center"
            >
              <MdOutlineFileUpload fontSize="50px" color="#6F6B7D" />
              <Typography
                variant="p"
                sx={{
                  color: "#6F6B7D",
                  fontWeight: 400,
                  fontSize: "22px",
                  lineHeight: "32px",
                }}
              >
                Drag and drop your image here
              </Typography>
              <Box
                sx={{
                  color: "#00318B",
                  fontSize: "15px",
                  width: "138px",
                  height: "36px",
                  lineHeight: "38px",
                  fontWeight: 400,
                  textAlign: "center",
                  lineHeight: "36px",
                  cursor: "pointer",
                  borderRadius: "6px",
                  background: "rgba(0, 49, 139, 0.10)",
                }}
              >
                Browse image
              </Box>
            </Stack>
          </FileUploadBox>
        </label>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap="1rem"
          sx={{ mt: "22px" }}
        >
          <Card
            sx={{
              width: "184px",
              maxHeight: "220px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              pt: 2,
              pb: 1,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "90px",
                height: "91px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  bgcolor: "rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <RxCross2 color="#EA5455" fontSize="32px" />
              </Box>
              <Image priority
                src={img1}
                alt="image"
                style={{ width: "100%", height: "100%" }}
                layout="reponsive"
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "70px",
                borderTop: "1px solid #DBDADE",
                borderBottom: "1px solid #DBDADE",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                px: 2,
                mt: 2,
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "#6F6B7D",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Flower.png <br />
                10.2 MB
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "transparent",
                width: "100%",
                height: "30px",
                color: "#6F6B7D",
                boxShadow: "none",
                fontSize: "14px",
                textTransform: "capitalize",
                textAlign: "center",
                pt: 1,
                cursor: "pointer",
              }}
            >
              Remove File
            </Box>
          </Card>
          <Card
            sx={{
              width: "184px",
              maxHeight: "220px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              pt: 2,
              pb: 1,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "90px",
                height: "91px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  bgcolor: "rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TiTick color="#00CA99" fontSize="35px" />
              </Box>
              <Image priority
                src={img1}
                alt="image"
                style={{ width: "100%", height: "100%" }}
                layout="reponsive"
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "70px",
                borderTop: "1px solid #DBDADE",
                borderBottom: "1px solid #DBDADE",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                px: 2,
                mt: 2,
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "#6F6B7D",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Flower.png <br />
                10.2 MB
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "transparent",
                width: "100%",
                height: "30px",
                color: "#6F6B7D",
                boxShadow: "none",
                fontSize: "14px",
                textTransform: "capitalize",
                textAlign: "center",
                pt: 1,
                cursor: "pointer",
              }}
            >
              Remove File
            </Box>
          </Card>
        </Stack>
      </Box>
    </CustomCard>
  );
};

export default PictureCard;
