"use client";
import React from "react";
import bgImg from "@/assets/read-more.png";
import styled from "@emotion/styled";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Paragraph } from "@/components/styles/Typography";
import Sidebar from "@/components/sidebar";
import Appbar from "@/components/appbar";
import { ContentBox } from "@/components/styles/Box";
import { BlueButton } from "@/components/styles/Buttons";
import BreedCrumb from "@/components/mui/breedcrumbs";
import { CustomCard } from "@/components/styles/Card";

const BackgroundImage = styled(Box)({
  width: "100%",
  height: "597px",
  background: `url(${bgImg.src}) lightgray 50% / cover no-repeat`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
});

const ContentContainer = styled(Box)({
  height: "144px",
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 5.67%, rgba(255, 255, 255, 0.58) 38.32%, rgba(255, 255, 255, 0.82) 54.78%, #FFF 71.05%)",
  zIndex: "9",
});

const Page = () => {
  const values = {
    title: "Jenifer Jordan",
    links: [
      {
        title: "Success Story",
        path: "/website-setup/success-stories",
      },
    ],
  };
  return (
    <main>
      <Box sx={{ width: "100%", height: "auto", pb: 5 }}>
        <Stack direction="row">
          <Box sx={{ width: {xs:'0px',lg:"260px"} }}></Box>
          <ContentBox
            sx={{ width: { xs: "100%", md: "100%", lg: "calc(100% - 260px)" } }}
          >
            <Appbar />

            <CustomCard sx={{p:'22px', mt: "90px", width: '100%'}}>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ width: "100%", mb: "17px" }}
              >
                <BreedCrumb values={values} />

                <Stack direction="row" gap="1rem">
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#00318B",
                      color: "#00318B",
                      textTransform: "capitalize",
                      "&:hover": {
                        borderColor: "#00318B",
                        color: "#00318B",
                      },
                    }}
                  >
                    Delete
                  </Button>
                  <BlueButton
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      bgcolor: "#00318B",
                    }}
                    //   onClick={handleOpen}
                  >
                    Edit
                  </BlueButton>
                </Stack>
              </Stack>

              <BackgroundImage>
                <ContentContainer>
                    <Box
                      sx={{
                        zIndex: 99,
                        mt: 5,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#2D2D2D",
                          fontSize: {xs:'20px',sm:"30px"},
                          fontWeight: 500,
                          lineHeight: "48px",
                          textTransform: "capitalize",
                          textAlign: "center",
                          fontFamily: 'Montserrat !important'
                        }}
                      >
                        Jenifer Jordan
                      </Typography>
                      <Typography
                        variant="h2"
                        sx={{
                          color: "#000",
                          fontSize: {xs:'25px',sm:"35px"},
                          fontWeight: 600,
                          textTransform: "uppercase",
                          textAlign: "center",
                          mt: "18px",
                          fontFamily: 'Montserrat !important'
                        }}
                      >
                        Objectives Should Be Stated Clearly
                      </Typography>
                    </Box>
                </ContentContainer>
              </BackgroundImage>

                <Paragraph sx={{ mt: "60px", fontFamily: 'Montserrat !important' }}>
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </Paragraph>
                <Paragraph sx={{ mt: "30px" }}>
                  Nam liber tempor cum soluta nobis eleifend option congue nihil
                  imperdiet doming id quod mazim placerat facer possim assum.
                  Typi non habent claritatem insitam; est usus legentis in iis
                  qui facit eorum claritatem. Investigationes demonstraverunt
                  lectores legere me lius quod ii legunt saepius. Claritas est
                  etiam processus dynamicus, qui sequitur mutationem
                  consuetudium lectorum. Mirum est notare quam littera gothica,
                  quam nunc putamus parum claram, anteposuerit litterarum formas
                  humanitatis per seacula quarta decima et quinta decima. Eodem
                  modo typi, qui nunc nobis videntur parum clari, fiant
                  sollemnes in futurum.
                </Paragraph>

                <Box
                  sx={{
                    mx: "auto",
                    my: "34px",
                    maxWidth: "618px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      color: "#000",
                      fontWeight: 600,
                      fontSize: "18px",
                      letterSpacing: "1px",
                      textTransform: "capitalize",
                      lineHeight: "25px",
                      fontFamily: 'Montserrat !important'
                    }}
                  >
                    “You never accomplish anything alone, I was feeling the
                    absence of the people who were most influential in getting
                    me to this point. wished they could be here too. ”
                  </Typography>
                </Box>
                <Paragraph sx={{ mt: "30px" }}>
                  Nam liber tempor cum soluta nobis eleifend option congue nihil
                  imperdiet doming id quod mazim placerat facer possim assum.
                  Typi non habent claritatem insitam; est usus legentis in iis
                  qui facit eorum claritatem. Investigationes demonstraverunt
                  lectores legere me lius quod ii legunt saepius. Claritas est
                  etiam processus dynamicus, qui sequitur mutationem
                  consuetudium lectorum. Mirum est notare quam.
                </Paragraph>

                <Box
                  sx={{
                    border: "2px dashed #F7CA18",
                    background: "rgba(35, 43, 90, 0.05)",
                    height: "190.908px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    my: "34px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#000",
                      fontWeight: 600,
                      textAlign: "center",
                      fontSize: "20px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      lineHeight: "25px",
                      fontFamily: 'Montserrat !important'
                    }}
                  >
                    FUN FACTS
                  </Typography>
                  <Box
                    sx={{
                      mx: "auto",
                      mt: "13px",
                      maxWidth: "618px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{
                        color: "#000",
                        fontWeight: 400,
                        fontSize: "18px",
                        letterSpacing: "1px",
                        textTransform: "capitalize",
                        lineHeight: "25px",
                        fontFamily: 'Montserrat !important'
                      }}
                    >
                      “You never accomplish anything alone, I was feeling the
                      absence of the people who were most influential in getting
                      me to this point. wished they could be here too. ”
                    </Typography>
                  </Box>
                </Box>

                <Paragraph sx={{ mt: "30px" }}>
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </Paragraph>

                <Paragraph sx={{ mt: "30px" }}>
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissre te feugait nulla facilisi. Nam liber tempor cum
                  soluim qui blandit praesent luptatum zzril delenit augue duis
                  dolota nobis eleifend option congue nihil imperdiet doming id
                  quod mazim placerat facer possim assum. Typi non habent
                  claritatem insitam; est usus legentis in iis qui facit eorum
                  claritatem. Investigationes demonstraverunt lectores legere me
                  lius quod ii legunt saepius. Claritas est etiam processus
                  dynamicus, qui sequitur mutationem consuetudium lectorum.
                </Paragraph>

                <Box sx={{ mt: "54px" }}>
                  <Typography
                    variant="p"
                    sx={{
                      color: "#000",
                      fontStyle: "italic",
                      fontWeight: 300,
                      lineHeight: "25px",
                      textTransform: "capitalize",
                      fontFamily: 'Montserrat !important'
                    }}
                  >
                    Posted By Samanta Hue, 25 May 2022
                  </Typography>
                </Box>
            </CustomCard>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Page;
