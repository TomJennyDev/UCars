import { Box, Button, Container, Stack, Typography } from "@mui/material";
import useResponsive from "hooks/useResponsive";

function CTA() {
  const isLgUp = useResponsive("up", "lg");

  return (
    <Box
      sx={{
        height: "694px",
        backgroundImage: isLgUp
          ? "url(https://res.cloudinary.com/codershool/image/upload/v1669084062/ucars/banner/banner2_k7kl1p.png)"
          : "url( https://res.cloudinary.com/codershool/image/upload/v1669872659/ucars/banner/unsplash_SV3e7hGlVnc_rs6dzd.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <Container maxwith="lg" sx={{ height: "100%" }}>
        <Stack
          direction="column"
          justifyContent={{ xs: "space-between", lg: "center" }}
          alignItems={{ xs: "center", lg: "stretch" }}
          sx={{
            maxWidth: "410px",
            height: "100%",
            textAlign: { xs: "center" },
            py: { xs: "80px" },
          }}
        >
          <Typography
            color="primary.contrastText"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "48px", lg: "76px" },
              lineHeight: { xs: "72px", lg: "114px" },
              maxWidth: { xs: "246px", lg: "100%" },
            }}
          >
            Questions about buying or renting?
          </Typography>
          <Button
            href="#"
            variant="contained"
            sx={{ py: "20px", alignSelf: "stretch" }}
          >
            Ask Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default CTA;
