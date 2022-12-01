// material
import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------

// const APP_BAR_MOBILE = 40;
// const APP_BAR_DESKTOP = 80;

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  backgroundColor: "#F2F5F9",
}));

// const MainStyle = styled("div")(({ theme }) => ({
//   flexGrow: 1,
//   overflow: "auto",
//   minHeight: "100vh",
//   paddingTop: APP_BAR_MOBILE + 30,
//   paddingBottom: theme.spacing(10),
//   [theme.breakpoints.up("lg")]: {
//     paddingTop: APP_BAR_DESKTOP + 24,
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(2),
//   },
//   paddingLeft: theme.spacing(2),
//   paddingRight: theme.spacing(2),
// }));

export default function DashboardLayout() {
  // const [open, setOpen] = useState(false);

  return (
    <RootStyle direction="row">
      {/* <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />
      <MainStyle>
        <Stack direction="column">
          <Outlet />
        </Stack>
      </MainStyle> */}
    </RootStyle>
  );
}
