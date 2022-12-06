import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Avatar,
  Box,
  Divider,
  FormControlLabel,
  Radio,
  Stack,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { fDate } from "utils/formatTime";
import { ButtonBrandDetails, ButtonBrandStatus } from "./ui/Button";
import { DividerStyled } from "./ui/Devider";
import {
  TypographyDate,
  TypographyDesc,
  TypographyLastUpdate,
  TypographyModels,
  TypographyName,
} from "./ui/Typography";

function BrandChild({ idx, brand, selectedId }) {
  const isEven = idx % 2 === 0;

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        mb: 2,
        height: "124px",
        p: 2,
        width: "100%",
        borderBottom: (theme) => `1px solid ${theme.palette.grey[200]}`,
        boxShadow: selectedId === brand.id ? 3 : "none",
      }}
    >
      <Stack direction="row" spacing={"40px"} alignItems="center">
        <Box>
          <FormControlLabel
            key={brand.id}
            value={brand.id || ""}
            sx={{ m: 0 }}
            control={
              <Radio
                color="secondary"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
          />
        </Box>
        <Avatar
          src={brand.imgUrl}
          alt={brand.name}
          sx={{ width: "64px", height: "64px" }}
        />
        <DividerStyled
          orientation="vertical"
          variant="middle"
          iseven={isEven.toString()}
        />
        <Stack spacing={"4px"}>
          <TypographyName variant="h6" color="initial">
            {brand.name}
          </TypographyName>
          <Stack
            direction="row"
            divider={
              <Divider orientation="vertical" flexItem variant="middle" />
            }
            spacing={2}
          >
            <TypographyDesc variant="h6" color="initial" noWrap>
              {brand.description}
            </TypographyDesc>
            <TypographyModels variant="h6" color="initial">
              {brand.totalModels} Models
            </TypographyModels>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="column">
        <TypographyLastUpdate variant="h6" color="initial">
          Last Update
        </TypographyLastUpdate>
        <TypographyDate variant="h6" color="initial">
          {fDate(brand.updatedAt)}
        </TypographyDate>
      </Stack>

      <ButtonBrandStatus
        variant="contained"
        startIcon={<FiberManualRecordIcon />}
        isactive={!brand.status.toString() || null}
      >
        {brand.status ? "Active" : "Inactive"}
      </ButtonBrandStatus>

      <ButtonBrandDetails
        component={NavLink}
        variant="outlined"
        color="secondary"
        to={brand.id}
      >
        View Details
      </ButtonBrandDetails>
    </Stack>
  );
}

export default BrandChild;
