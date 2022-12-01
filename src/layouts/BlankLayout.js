import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

function BlankLayout() {
  return (
    <Stack minHeight="100vh">
      <Outlet />
    </Stack>
  );
}

export default BlankLayout;
