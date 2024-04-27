import Appbar from "@/components/appbar";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import { Box, Stack } from "@mui/material";
import RootLayout from "./layout";
import { useEffect } from "react";

export default function Home() {
  return (
    <RootLayout>
      <main>
        <Box sx={{width: '100%', height: 'auto'}}>
          <Stack direction="row">
            <Box sx={{width: {md: '0px', lg:'260px'}}}></Box>
            <ContentBox>
              <Appbar />
            </ContentBox>
          </Stack>
        </Box>
      </main>
    </RootLayout>
  );
}
