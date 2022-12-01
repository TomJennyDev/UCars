import { Fragment, useState } from "react";

import AccountTreeIcon from "@mui/icons-material/AccountTree";
import InfoIcon from "@mui/icons-material/Info";
import PolicyIcon from "@mui/icons-material/Policy";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Divider } from "@mui/material";
import List from "@mui/material/List";
import CollapseFooter from "./CollapseFooter";

const COLLAPSE_DATA = [
  {
    id: 1,
    title: "About",
    content: ["About Us", "Contact Us", "Careers"],
    icon: <InfoIcon />,
  },
  {
    id: 2,
    title: "Services",
    content: ["About Us", "Contact Us", "Careers"],
    icon: <SupportAgentIcon />,
  },
  {
    id: 3,
    title: "Resources",
    content: ["Buy Used Cars", "Buy New Cars", "Be a Dealer with UCARS"],
    icon: <AccountTreeIcon />,
  },
  {
    id: 4,
    title: "Legal",
    content: [
      "Advertising Terms and Conditions",
      "Platform Terms and Condition",
      "Privacy Policy",
    ],
    icon: <PolicyIcon />,
  },
];

export default function ListInfoFooter() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <Divider />

      {COLLAPSE_DATA.map((item) => (
        <Fragment key={item.id}>
          <CollapseFooter
            item={item}
            handleClick={handleClick}
            selectedIndex={selectedIndex}
          />
          <Divider />
        </Fragment>
      ))}
      <Divider />
    </List>
  );
}
