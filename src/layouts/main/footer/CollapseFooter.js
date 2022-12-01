import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function CollapseFooter({ handleClick, selectedIndex, item }) {
  const open = selectedIndex === item.id;
  return (
    <>
      <ListItemButton
        onClick={() => handleClick(item.id)}
        sx={{ px: 0, py: 2, fontWeight: "bold" }}
      >
        <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.content.map((item) => (
            <ListItemButton sx={{ pl: 2 }} key={item}>
              <ListItemText component={Link} primary={item} href="#" />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default CollapseFooter;
