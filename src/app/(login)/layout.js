import { Inter } from "next/font/google";
// import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";
import Providers from "@/redux/provider";
import { Suspense } from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skyline University",
  description: "Skyline University",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body className={inter.className} style={{backgroundColor: '#F8F7FA'}}>
            <Providers>
              {children}
            </Providers>
        </body>
      </html>
    </ThemeProvider>
  );
}