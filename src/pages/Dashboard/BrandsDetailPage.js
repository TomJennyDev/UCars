import { Stack } from "@mui/material";
import BreadCrumbStyled from "components/ui/BreadCrumbStyled";

function BrandsDetail({ title }) {
  return (
    <Stack>
      <BreadCrumbStyled title={title} isBack={true} />
    </Stack>
  );
}

export default BrandsDetail;
