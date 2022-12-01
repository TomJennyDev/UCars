import { Card, Stack } from "@mui/material";
import SkeletonLoading from "components/ui/SkeletonLoading";

export default function ProductCardSkeleton({ isLoading }) {
  return (
    <Card>
      <SkeletonLoading
        isLoading={true}
        style={{ width: "100%", minHeight: "187px" }}
      />

      <Stack spacing={1} sx={{ p: 2 }}>
        <SkeletonLoading isLoading={true} count={3} width="100%" />
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <SkeletonLoading
            isLoading={true}
            circle={true}
            width="32px"
            height="32px"
          />
          <SkeletonLoading isLoading={true} width="50px" />
        </Stack>
      </Stack>
    </Card>
  );
}
