/* eslint-disable react/prop-types */
// @ts-nocheck
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { InputBase, styled, useTheme } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #c34444",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "220px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const options = ["All Categories", "Men", "Women", "Electronics", "Jewelery"];

// eslint-disable-next-line react/prop-types, no-unused-vars
const SearchSelect = ({
  setmyDate,
  allProductsAPI,
  menCategoryAPI,
  womenCategoryAPI,
  jeweleryCategoryAPI,
  electronicCategoryAPI,
}) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  

  const theme = useTheme();
  return (
    <>
      <Search
        sx={{
          display: "flex",
          borderRadius: "22px",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={t("Search…")}
          inputProps={{ "aria-label": "search" }}
          sx={{ flexGrow: 1 }}
        />

        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
              p: "0",
              width:
                localStorage.getItem("langaugeSite") == "FR" ||
                i18n.language == "FR"
                  ? "165px !important"
                  : localStorage.getItem("langaugeSite") == "CHI" ||
                    i18n.language == "CHI"
                  ? "190px !important"
                  : localStorage.getItem("langaugeSite") == "RUS" ||
                    i18n.language == "RUS"
                  ? "190px !important"
                  : null,
              "&:hover": { cursor: "pointer" },
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                sx={{
                  width: 93,
                  textAlign: "center",
                }}
                secondary={t(options[selectedIndex])}
              />
              <ExpandMore sx={{ fontSize: "16px" }} />
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
                sx={{ fontSize: "13px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => {
                  handleMenuItemClick(event, index)
                  option == "Men" ? setmyDate(menCategoryAPI)
                  : option == "Women" ? setmyDate(womenCategoryAPI)
                  : option == "Electronics" ? setmyDate(electronicCategoryAPI)
                  : option == "Jewelery" ? setmyDate(jeweleryCategoryAPI)
                  : setmyDate(allProductsAPI)
                }}
              >
                {t(option)}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>
    </>
  );
};

export default SearchSelect;
