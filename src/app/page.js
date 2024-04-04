import Appbar from "@/components/appbar";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <Box sx={{width: '100%', height: 'auto'}}>
        <Stack direction="row">
          <Box sx={{width: '260px'}}></Box>
          <ContentBox

          >
            <Appbar />
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
}
