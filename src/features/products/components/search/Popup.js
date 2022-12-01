import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Popover,
} from "@mui/material";
import * as React from "react";
import { Title } from "../ProductCard";

function Popup({
  id,
  anchorEl,
  handleClose,
  handleResetField,
  title,
  isOpen,
  children,
}) {
  return (
    <Popover
      id={id}
      open={isOpen(id)}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Card sx={{ minWidth: 275, maxWidth: 473, p: 2 }}>
        <Title sx={{ fontWeight: 600 }}>{title}</Title>
        <CardContent>{children}</CardContent>
        <Divider />
        <CardActions
          sx={{ display: "flex", justifyContent: "space-between", py: 2 }}
        >
          <Button size="small" onClick={() => handleResetField(id)}>
            Clear
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={handleClose}
          >
            Save
          </Button>
        </CardActions>
      </Card>
    </Popover>
  );
}

export default Popup;
