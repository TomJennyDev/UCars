import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import { Logo } from "components/ui";
import { drawerWidth } from "../DashboardLayout";
import DashboardDrawerMenu from "./DashboardDrawerMenu";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function DashBoardDrawer({ isOpenDrawer, handleDrawerClose }) {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: theme.palette.grey[800],
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpenDrawer}
    >
      <DrawerHeader
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Logo
          sx={{
            width: "103px",
            height: "auto",
            ml: 2,
          }}
          src="https://res.cloudinary.com/codershool/image/upload/v1669084028/ucars/logo/UCARS_Logo_hxhvzo.svg"
        />
        <IconButton
          onClick={handleDrawerClose}
          sx={{ color: theme.palette.common.white }}
        >
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <DashboardDrawerMenu />
      <Divider sx={{ color: theme.palette.common.white }} />
    </Drawer>
  );
}
