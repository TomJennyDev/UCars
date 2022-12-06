import { SkeletonLoading } from "components/ui";

function SkelentonBrand() {
  return (
    <SkeletonLoading
      isLoading="true"
      style={{ width: "100%", height: "124px", pb: 1, display: "block" }}
    />
  );
}

export default SkelentonBrand;
