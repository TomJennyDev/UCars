import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

function SearchChild({ id, title, handleClick, isOpen, children }) {
  return (
    <Link
      component={Stack}
      id={id}
      aria-describedby={id}
      onClick={handleClick}
      underline="none"
      sx={{
        width: "100%",
        py: "25px",
        px: "40px",
        backgroundColor: isOpen(id)
          ? (theme) => `${theme.background.paper}`
          : "transparent",

        "&:hover": {
          boxShadow: 2,
          backgroundColor: (theme) => `${theme.background.paper}`,
        },
        cursor: "pointer",
      }}
    >
      <Typography
        color="initial"
        variant="body"
        sx={{
          fontWeight: 500,
          lineHeight: "19px",
          color: (theme) => `${theme.palette.grey[800]}`,
          pb: 2,
        }}
      >
        {title}
      </Typography>
      <Stack direction="row" justifyContent="space-between">
        {children}
        {isOpen(id) ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </Stack>
    </Link>
  );
}

export default SearchChild;
