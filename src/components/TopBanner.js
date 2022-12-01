import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

function TopBanner() {
  return (
    <Container maxwidth="lg">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        sx={{ height: "72px", fontFamily: "Poppins" }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
            sx={{ mb: 0.5, width: "215px" }}
          >
            <LocationOnIcon fontSize="small" />
            <Typography variant="caption">
              71 Ayer Rajah Crescent, #06-14, Singapore 139951
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
            sx={{ mb: 0.5 }}
          >
            <MailIcon fontSize="small" />
            <Box>
              <Typography variant="caption" color="initial">
                Email us at:
                <br />
                <Link href="#" underline="hover" color="initial">
                  hello@carbuyer.com.sg
                </Link>
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
          sx={{ mb: 0.5 }}
        >
          <PhoneEnabledIcon size="small" />
          <Typography variant="caption">
            <Link
              href="#"
              underline="hover"
              color="initial"
              sx={{ fontWeight: 500 }}
            >
              +65 8808 7905
            </Link>

            <br />
            <Link
              href="#"
              underline="hover"
              color="initial"
              sx={{ fontWeight: 500 }}
            >
              +7 (700) 51 51 518
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}

export default TopBanner;
