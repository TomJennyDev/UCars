import { Box, Stack } from "@mui/material";
import TopBanner from "components/TopBanner";
import { AlertMsg } from "components/ui";
import useResponsive from "hooks/useResponsive";
import { Outlet } from "react-router-dom";

import MainFooter from "./footer/MainFooter";
import MainHeader from "./MainHeader";
function MainLayout() {
  const isLgUp = useResponsive("up", "lg");
  return (
    <Stack sx={{ minHeight: "100vh", margin: "auto" }}>
      <AlertMsg />
      {isLgUp && <TopBanner />}
      <MainHeader />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
