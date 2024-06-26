import Appbar from "@/components/appbar";
import { ContentBox } from "@/components/styles/Box";
import { Box, Stack } from "@mui/material";
import RootLayout from "./layout";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/dashboards/ecommerce-dashboard`)
  return (
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
  );
}
