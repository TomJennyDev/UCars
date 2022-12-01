import { Card, Stack } from "@mui/material";
import { SkeletonLoading } from "components/ui";

export default function FeaturesSkeleton() {
  return (
    <Card
      sx={{
        minWidth: "415px",
        minHeight: "361px",
      }}
    >
      <SkeletonLoading
        isLoading={true}
        style={{ width: "100%", minHeight: "200px" }}
      />

      <Stack spacing={1} sx={{ p: 4 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <SkeletonLoading isLoading={true} width="70px" />
            <SkeletonLoading isLoading={true} width="50px" />
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <SkeletonLoading isLoading={true} width="30px" />
            <SkeletonLoading isLoading={true} width="30px" />
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
