"use client";
import React from "react";
import bgImg from "@/assets/read-more.png";

import { Box, Container, Stack, Typography } from "@mui/material";
import { Paragraph } from "@/components/styles/Typography";
import img from "@/assets/images/img4.png"
import Image from "next/image"


const ReadMore = () => {
  return (
    <main>
        <Stack direction="row" columnGap="62px" justifyContent="space-between" alignItems="center" sx={{mt: '23px'}}>
            <Box
                sx={{
                    width: '35%',
                    maxWidth: '412px',
                    maxHeight: '422px',
                    aspectRatio: '0.976',
                    backgroundColor: '#00318B',

                }}
            >
                <Image
                    src={img}
                    style={{
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        border: '2px solid white',
                        marginTop: '20px',
                        marginLeft: '20px'
                    }}
                    alt='img'
                />
            </Box>
            <Box
                sx={{
                    width: '65%',
                    // maxWidth: '665px',
                }}
            >
                <Typography
                variant='h4'
                sx={{
                    color: '#000',
                    fontSize: '35px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'capitalize',
                    mb: '11px',
                }}
                >
                    Welcome to Skyline University College (SUC) in Sharjah.
                </Typography>
                <Typography
                variant='p'
                sx={{
                    color: '#000',
                    letterSpacing: '1px',
                    lineHeight: '25px',
                    textTransform: 'capitalize',
                }}
                >
                    In preparation to upgrade its status into a fully-fledged university, SUC has recently diversified by the inception of its new School of Information Technology. Both of SUCs schools (School of Business and School of Information Technology) play a fundamental role in carrying out the mission of imparting knowledge, developing professional skills and inculcating values. In a highly dynamic and fast changing world, playing this role in a traditional education environment would not be possible. At SUC we have adopted innovation and creativity as major tool to ensure that we prepare our current students to acquire the knowledge and skills that will enable them to lead in all areas in the future.
                </Typography>
            </Box>
        </Stack>

        <Paragraph sx={{mt: '30px'}}>
        To ensure preparedness for the future needs in terms of knowledge, skills and competencies, SUC gives a proper focus on academic and applied research and consultancy. This engagement in research, both at national and international levels, provides a great opportunity for professional development. It also gives our programs a competitive advantage.
        </Paragraph>

        <Paragraph sx={{mt: '30px'}}>
        SUC remains committed to the development of professionalism, leadership qualities, innovation and entrepreneurship attributes among its graduates. SUC recognizes that one of the most important implications of the fourth industrial revolution is the transformation of the concept of knowledge from “knowledge in the minds” to “knowledge in the hands”. Therefore, our faculty members play the role of facilitators to help our students to learn how to learn and how to select the most pertinent knowledge that they need in order to master their skills, abilities, and competencies.
        </Paragraph>

        <Paragraph sx={{mt: '30px'}}>
        Through their learning journey, our students develop habits of the mind that provide them with the versatility needed to be successful in an ever more complex and volatile world environment. Our students relish the many opportunities and challenges provided to them through the varied media available to them at SUC. In striving to predict future human intellectual resources needs, SUC is continuously engaged in the process of developing new programs and reviewing existing programs. This ensures the use of the state of the art technology to facilitate a student centered learning methodology.
        </Paragraph>

        <Paragraph sx={{mt: '30px'}}>
        The diversity of SUCs faculty, staff and students is a unique characteristic that ensures engagement in both the local and distant communities which helps in bridging the gap between learning and doing.
        </Paragraph>

        <Paragraph sx={{mt: '30px'}}>
        At SUC, our strongest assets include our students, alumni, faculty, staff, community partners, and well-wishers, and I look forward to working collaboratively with all as we fulfill our goals. Many of our alumni go on to serve throughout the world making positive contributions to managerial professions. Through numerous educational experiences, research and community service, our students and faculty find opportunities to grow, both personally and professionally.
        </Paragraph>

        <Paragraph sx={{mt: '30px'}}>
        I encourage you to explore our website to learn about the programs and opportunities that await you at SUC. We hope you consider joining us in our efforts to contribute to building the future pool of required skills and competencies.
        </Paragraph>

        <Box sx={{mt: '30px'}}>
        <Typography
            variant='h6'
            sx={{
                color: '#000',
                lineHeight: '25px',
                letterSpacing: '1px',
                fontWeight: 600,
                textTransform: 'capitalize',
            }}
        >
            Prof. Mohammad Inairat
        </Typography>
        <Paragraph>
        Vice Chancellor
        </Paragraph>
        </Box>
    </main>
  );
};

export default ReadMore;
