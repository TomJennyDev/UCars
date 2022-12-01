import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Logo from "components/ui/Logo";
import useResponsive from "hooks/useResponsive";
import ListInfoFooter from "./ListInfoFooter";

const LinkFooter = styled(Link)(({ theme }) => ({
  color: theme.palette.grey[800],
  fontSize: "14px",
}));
const LinkFooter2 = styled(LinkFooter)(({ theme }) => ({
  color: theme.palette.grey[600],
}));

function MainFooter() {
  const isLgUp = useResponsive("up", "lg");
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ py: "40px", fontFamily: "Poppins", position: "relative" }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, lg: 4 }}
        >
          <Box>
            <Logo
              src="https://res.cloudinary.com/codershool/image/upload/v1669084028/ucars/logo/Carbuyer_Logo_2_o9ytum.svg"
              sx={{ height: "62px", width: "300px", mb: "16px" }}
            />
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              sx={{ mb: 0.5 }}
            >
              <LocationOnIcon size="small" />
              <Typography variant="caption" color="">
                71 Ayer Rajah Crescent, #06-14, Singapore 139951
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              sx={{ mb: 0.5 }}
            >
              <PhoneEnabledIcon size="small" />
              <Typography variant="caption">+65 8808 7905</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              sx={{ mb: 0.5 }}
            >
              <MailIcon size="small" />
              <Typography variant="caption">hello@carbuyer.com.sg</Typography>
            </Stack>
          </Box>
          {isLgUp ? (
            <Stack direction="row" spacing={3}>
              <Stack spacing={1.3}>
                <Typography variant="body" sx={{ fontWeight: 600 }}>
                  About
                </Typography>
                <LinkFooter2 underline="hover" href="#">
                  About Us
                </LinkFooter2>
                <LinkFooter2 underline="hover" href="#">
                  Contact Us
                </LinkFooter2>
                <LinkFooter2 underline="hover" href="#">
                  Careers
                </LinkFooter2>
              </Stack>
              <Stack spacing={1.3}>
                <Typography variant="body" sx={{ fontWeight: 600 }}>
                  Services
                </Typography>
                <LinkFooter2 underline="hover" href="#">
                  Buy Used Cars
                </LinkFooter2>
                <LinkFooter2 underline="hover" href="#">
                  Buy New Cars
                </LinkFooter2>
                <LinkFooter2 underline="hover" href="#">
                  Be a Dealer with UCARS
                </LinkFooter2>
              </Stack>
              <Stack spacing={1.3}>
                <Typography variant="body" sx={{ fontWeight: 600 }}>
                  Resources
                </Typography>
                <LinkFooter2 underline="hover" href="#">
                  News
                </LinkFooter2>
                <LinkFooter2 underline="hover" href="#">
                  Sell My Car
                </LinkFooter2>
                <LinkFooter2 underline="hover" href="#">
                  COE Prices
                </LinkFooter2>
              </Stack>
            </Stack>
          ) : (
            <ListInfoFooter />
          )}
          <Stack direction="column" spacing={2}>
            <Typography>
              Get the{" "}
              <Link underline="none" href="#">
                latest
              </Link>{" "}
              automotive news sent to your inbox!
            </Typography>
            <Stack direction="row">
              <TextField
                id="outlined-basic"
                label="Enter your email"
                variant="outlined"
                size="small"
              />
              <Button variant="contained" color="primary">
                subscribe
              </Button>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Follow us</Typography>
              <IconButton
                aria-label="instargram"
                href="#"
                size="small"
                color="inherit"
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="instargram"
                href="#"
                size="small"
                color="inherit"
              >
                <FacebookOutlinedIcon fontSize="small" />
              </IconButton>{" "}
              <IconButton
                aria-label="instargram"
                href="#"
                size="small"
                color="inherit"
              >
                <TelegramIcon fontSize="small" />
              </IconButton>{" "}
              <IconButton
                aria-label="instargram"
                href="#"
                size="small"
                color="inherit"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>{" "}
              <IconButton
                aria-label="instargram"
                href="#"
                size="small"
                color="inherit"
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Divider light={true} sx={{ my: "24px" }} />
        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent={{ md: "center", lg: "space-between" }}
          alignItems={{ md: "center", lg: "space-between" }}
        >
          <Stack spacing={1}>
            {isLgUp && (
              <Stack direction="row" spacing={1}>
                <LinkFooter underline="hover" href="#">
                  Advertising Terms and Conditions
                </LinkFooter>
                <LinkFooter underline="hover" href="#">
                  Platform Terms and Conditions
                </LinkFooter>
                <LinkFooter underline="hover" href="#">
                  Privacy Policy
                </LinkFooter>
              </Stack>
            )}
            <Stack direction="row" spacing={2}>
              <Logo
                sx={{ width: "56px", height: "16px" }}
                src="https://res.cloudinary.com/codershool/image/upload/v1669084028/ucars/logo/UCARS_Logo_hxhvzo.svg"
              />
              <Typography
                sx={{
                  color: (theme) => theme.palette.grey[600],
                  fontSize: "12px",
                }}
              >
                CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly
                owned by UCARS Pte Ltd
              </Typography>
            </Stack>
          </Stack>
          <Typography
            sx={{
              color: (theme) => theme.palette.grey[500],
              fontSize: "14px",
              display: { lg: "block", xs: "none" },
            }}
          >
            © 2022. All rights reserved.
          </Typography>
        </Stack>
      </Container>
      <Typography
        sx={{
          color: "white",
          fontSize: "14px",
          display: { lg: "none", xs: "block" },
          textAlign: "center",
          width: "100vw",
          p: 2,
          backgroundColor: (theme) => `${theme.palette.grey[800]}`,
        }}
      >
        © 2022. All rights reserved.
      </Typography>
    </>
  );
}

export default MainFooter;
