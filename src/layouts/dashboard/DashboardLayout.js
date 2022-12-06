// material
import { styled } from "@mui/material/styles";
import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DasboardHeader";
import DashBoardDrawer, { DrawerHeader } from "./drawer/DashboardDrawer";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
}));
export const drawerWidth = 240;

const MainStyled = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  maxHeight: "100vh",
  overflowY: "hidden",
}));

export default function DashboardLayout() {
  const [openDrawer, setOpenDrawer] = useState(true);

  const handleDrawerOpen = useCallback(() => {
    setOpenDrawer(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  return (
    <RootStyle>
      <DashBoardDrawer
        isOpenDrawer={openDrawer}
        handleDrawerClose={handleDrawerClose}
      />
      <DashboardHeader
        isOpenDrawer={openDrawer}
        handleDrawerOpen={handleDrawerOpen}
      />
      <MainStyled open={openDrawer}>
        <DrawerHeader />
        <Outlet />
      </MainStyled>
    </RootStyle>
  );
}
