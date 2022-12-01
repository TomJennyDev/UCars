import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Container, IconButton, Link, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Logo } from "components/ui";
import useResponsive from "hooks/useResponsive";
import useScrollPosition from "hooks/useScrollPosition";
const LinkHeader = styled(Link)(({ theme }) => ({
  "&:hover": {
    "--d": "80%",
  },
  background: `linear-gradient(90deg, transparent, white, transparent) 
  bottom /var(--d, 0) 2px no-repeat`,
  transition: "0.3s",
}));

const pages = ["News Cars", "Used Cars", "Reviews", "News"];

function ResponsiveAppBar() {
  const isLgUp = useResponsive("up", "lg");

  const scrollTrigger = useScrollPosition() < 150;

  return (
    <AppBar
      sx={{
        height: "77px",
        position: scrollTrigger ? "static" : "sticky",
        backgroundColor: !isLgUp && "white",
      }}
    >
      <Stack
        component={Container}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          height: "77px",
          maxWidth: "xl",
        }}
      >
        {isLgUp ? (
          <Logo
            src="https://res.cloudinary.com/codershool/image/upload/v1669084028/ucars/logo/UCARS_Logo_hxhvzo.svg"
            sx={{ width: "147px", height: "40px" }}
          />
        ) : (
          <Logo
            src="https://res.cloudinary.com/codershool/image/upload/v1669789581/ucars/logo/CB_Logo_Black_1_ehwwaq.png"
            sx={{ width: "120px", height: "40px" }}
          />
        )}
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {pages.map((page) => (
            <LinkHeader
              key={page}
              href="#"
              sx={{ px: 2, color: "white", display: "block" }}
              underline="none"
            >
              {page}
            </LinkHeader>
          ))}
        </Stack>
        {isLgUp ? (
          <Button variant="contained" color="primary" sx={{ px: 8 }}>
            Login
          </Button>
        ) : (
          <IconButton size="medium" color="grey[800]">
            <SearchIcon />
          </IconButton>
        )}
      </Stack>
    </AppBar>
  );
}
export default ResponsiveAppBar;
