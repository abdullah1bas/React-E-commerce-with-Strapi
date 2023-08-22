import { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { ExpandMore, Facebook, Instagram, Twitter } from "@mui/icons-material";
import ModeIcon from "./ModeIcon";
// import { useNavigate } from "react-router-dom";

const options = ["AR", "EN"];

const ListIconHeaderMode = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // const navigate = useNavigate();
  return (
    <>
      <ModeIcon />

      <List component="nav" aria-label="Device settings" sx={{ p: 0, m: 0 }}>
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
        >
          <ListItemText
            sx={{
              ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
            }}
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
        </ListItem>
      </List>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      <IconButton href="https://www.twitter.com/">
          <Twitter
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
      </IconButton>
      <IconButton href="https://www.facebook.com/">
        <Facebook
          sx={{
            fontSize: "16px",
            color: "#fff",
          }}
        />
      </IconButton>
      <IconButton href="https://www.instagram.com/">
        <Instagram
          sx={{
            fontSize: "16px",
            color: "#fff",
          }}
        />
      </IconButton>
    </>
  );
};

export default ListIconHeaderMode;
