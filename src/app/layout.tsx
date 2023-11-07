"use client";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import { ReactNode } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";

import "../styles/globals.scss";
import Providers from "@/stores/Providers";
import ProviderStore from "@/context/ProviderStore";
import ClientComponent from "@/context/ClientComponent";

function RootLayout({ children }: { children: ReactNode }) {
  const THEME = createTheme({
    typography: {
      fontFamily: "var(--font-primary)",
    },
  });

  return (
    <html lang="en">
      <body>
        <Providers>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <ThemeProvider theme={THEME}>
              <ToastContainer />
              <ProviderStore>
                <ClientComponent>
                  {children}
                </ClientComponent>

              </ProviderStore>
            </ThemeProvider>
          </LocalizationProvider>
        </Providers>
      </body>
    </html>
  );
}
export default RootLayout;
