import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function DashboardCollapse({
  handleClick,
  item,
  selectedIndex,
  children,
  ...props
}) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(null);
  const navigate = useNavigate();

  return (
    <List
      sx={{ width: "100%", px: 2, color: theme.palette.grey[500] }}
      component={item.children.length > 0 ? "nav" : "div"}
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        component={NavLink}
        onClick={() => {
          setIsOpen(!isOpen);
          handleClick(item.id);
          navigate(`${item.href}`);
        }}
        sx={{
          px: 2,

          fontWeight: "bold",
          borderRadius: 1,

          backgroundColor:
            selectedIndex === item.id && theme.palette.secondary.main,
          color: selectedIndex === item.id && theme.palette.common.white,
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
          },
        }}
      >
        {item.icon && (
          <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
        )}
        <ListItemText primary={item.title} />
        {isOpen
          ? item.children.length > 0 && <ExpandLess />
          : item.children.length > 0 && <ExpandMore />}
      </ListItemButton>

      {item.children && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      )}
    </List>
  );
}

export default DashboardCollapse;
