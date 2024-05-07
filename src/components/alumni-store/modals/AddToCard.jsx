import React, { useState } from "react";
import { Stack, Box, Typography, Modal, Button } from "@mui/material";
import logoImg from "@/assets/images/logoImg.png";
import Image from "next/image";
import { IoAddOutline } from "react-icons/io5";
import { BlueButton } from "@/components/styles/Buttons";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "923px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderColor: "0px solid transparent",
  borderRadius: "6px",
  py: "55px",
  px: "50px",
  maxHeight: "96vh",
  overflowX: "auto",
};

const images = [{}, {}, {}];

const AddToCard = ({ handleClose, open }) => {
  const router = useRouter();
  const [count, setCount] = useState(0);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: { xs: "auto", sm: "auto", md: "100%" } }}>
          <Stack
            direction={{ sm: "column", md: "row" }}
            alignItems="start"
            gap="31px"
          >
            <Box>
              <Box
                sx={{
                  width: "282px",
                  height: "277px",
                  borderRadius: "6px",
                  border: "1px solid #ECECEC",
                  bgcolor: "#FBFBFB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image priority
                  alt="logo img"
                  src={logoImg}
                  style={{
                    width: "182px",
                    height: "149px",
                    objectFit: " cover",
                  }}
                />
              </Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                gap="15px"
                sx={{ mt: "15px" }}
              >
                {images?.map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "83px",
                      height: "80px",
                      borderRadius: "6px",
                      border: "1px solid #ECECEC",
                      bgcolor: "#FBFBFB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image priority
                      alt="logo img"
                      src={logoImg}
                      style={{
                        width: "53px",
                        height: "43px",
                        objectFit: " cover",
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography
                component="div"
                variant="p"
                sx={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#313131",
                }}
              >
                Product Name
              </Typography>
              <Typography
                component="div"
                variant="p"
                sx={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#00318B",
                  mt: "15px",
                }}
              >
                Details
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: "#000000",
                  mt: "14px",
                }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
                &apos;Content here, content here&apos;, making it look like
                readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum
              </Typography>
              <Typography
                component="div"
                variant="p"
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#00318B",
                  mt: "21px",
                }}
              >
                $23.80
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                gap="20px"
                sx={{ mt: "25px" }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    border: "1px solid #ECECEC",
                    borderRadius: "4px",
                    pl: 2,
                    width: "162px",
                    height: "38px",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    component="div"
                    variant="p"
                    sx={{
                      color: "#4B465C",
                      textTransform: "capitalize",
                    }}
                    onClick={() => setCount(1)}
                  >
                    {count > 0
                      ? count > 0 && count < 10
                        ? "0" + count
                        : count
                      : "Add to Cart"}
                  </Typography>
                  <IoAddOutline
                    style={{
                      paddingLeft: "6px",
                      marginLeft: "8px",
                      fontWeight: 600,
                      borderLeft: "1px solid #ECECEC",
                      height: "100%",
                      borderRadius: "6px",
                    }}
                    fontSize="32px"
                    onClick={() => setCount(count + 1)}
                  />
                </Stack>
                {count >= 1 && (
                  <BlueButton
                    sx={{ bgcolor: "#00318B", width: "190px", "&:hover": {bgcolor: '#00318B'} }}
                    onClick={() => router.push("/alumni-store/my-orders/checkout")}
                  >
                    Checkout
                  </BlueButton>
                )}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default AddToCard;
