import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import PolicyIcon from "@mui/icons-material/Policy";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Box } from "@mui/material";
import { Fragment, useState } from "react";
import DashboardCollapse from "./DashboardCollapse";

const COLLAPSE_DATA = [
  {
    id: 1,
    title: "Car Brand",
    href: "/dashboard/brands",
    children: [],
    icon: <AirportShuttleIcon />,
  },
  {
    id: 2,
    title: "Services",
    href: "#",
    icon: <SupportAgentIcon />,
    children: [
      {
        id: 3,
        title: "About Us",
        href: "#",
        children: [],
        icon: <AirportShuttleIcon />,
      },
      {
        id: 4,
        title: "Contact Us",
        href: "#",
        children: [],
        icon: null,
      },
      {
        id: 5,
        title: "Careers",
        href: "#",
        children: [],
        icon: null,
      },
    ],
  },
  {
    id: 6,
    title: "Resources",
    href: "#",
    icon: <AccountTreeIcon />,
    children: [
      {
        id: 7,
        title: "About Us",
        href: "#",
        children: [],
        icon: null,
      },
      {
        id: 8,
        title: "Contact Us",
        href: "#",
        children: [],
        icon: null,
      },
      {
        id: 9,
        title: "Careers",
        href: "#",
        children: [],
        icon: null,
      },
    ],
  },
  {
    id: 10,
    title: "Legal",
    href: "#",
    children: [
      {
        id: 11,
        title: "About Us",
        href: "#",
        children: [],
        icon: null,
      },
      {
        id: 12,
        title: "Contact Us",
        href: "#",
        children: [],
        icon: null,
      },
      {
        id: 13,
        title: "Careers",
        href: "#",
        children: [],
        icon: null,
      },
    ],
    icon: <PolicyIcon />,
  },
];

function DashboardDrawerMenu() {
  const [selectedIndex, setSelectedIndex] = useState(COLLAPSE_DATA[0].id);

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(index);
    }
  };

  const createTree = (menu) =>
    menu.children && (
      <DashboardCollapse
        id={menu.id}
        key={menu.id}
        item={menu}
        handleClick={handleClick}
        selectedIndex={selectedIndex}
      >
        {menu.children.map((child) => {
          return <Fragment key={child.id}>{createTree(child)}</Fragment>;
        })}
      </DashboardCollapse>
    );
  return (
    <Box>
      {COLLAPSE_DATA.map((child, i) => (
        <Fragment key={i}>{createTree(child)}</Fragment>
      ))}
    </Box>
  );
}

export default DashboardDrawerMenu;
