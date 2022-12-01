import { Box, Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { BREAKPOINTS } from "theme";
import useFeatures from "../hooks/useFeatures";
import FeaturesList from "./featuresList/FeaturesList";

function Features() {
  const { isLoading, features } = useFeatures();

  return (
    <>
      <Container maxwidth="xl">
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent={{ xs: "center", lg: "space-between" }}
        >
          <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
            <Typography
              color="primary"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "32px", md: "48px", lg: "48px" },
                textAlign: { xs: "center", md: "left", lg: "left" },
              }}
            >
              Our Featured Vehicles.
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: "20px", md: "32px", lg: "32px" },
                textAlign: { xs: "center", md: "left", lg: "left" },
              }}
            >
              One of our biggest product to be featured and that has sold out
              the most.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ px: "48px", display: { xs: "none", lg: "block" } }}
          >
            view more
          </Button>
        </Stack>
      </Container>
      <Box
        sx={{
          ml: {
            xs: "24px",
            lg: `calc((100vw - ${BREAKPOINTS["lg"]}px ) /2)`,
          },

          mt: "60px",
          mb: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <FeaturesList features={features} isLoading={isLoading} />
        <Button
          variant="contained"
          sx={{ px: "48px", mr: "24px", display: { xs: "blog", lg: "none" } }}
        >
          view more
        </Button>
      </Box>
    </>
  );
}

export default Features;
