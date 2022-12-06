import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Stack } from "@mui/material";
import BreadCrumbStyled from "components/ui/BreadCrumbStyled";
import BrandList from "features/brands/components/BrandList";
import BrandsSearchOption from "features/brands/components/BrandsSearchOption";
function BrandPage({ title }) {
  return (
    <Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" spacing={3}>
          <BreadCrumbStyled title={title} />
          <BrandsSearchOption />
        </Stack>

        <Button
          component="div"
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
        >
          Add Brand
        </Button>
      </Stack>
      <Box
        sx={{
          mt: 2,
          height: "calc(100vh - 145px)",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <BrandList />
      </Box>
    </Stack>
  );
}

export default BrandPage;
