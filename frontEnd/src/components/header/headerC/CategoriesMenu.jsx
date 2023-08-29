import {
  Box,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
} from "@mui/icons-material";


const CategoriesMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  return (
    <Box>

        <Tooltip title='Categories Menu'>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              width: 222,
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
          
              color: theme.palette.text.secondary,
            }}
          >
            <WindowIcon />
            <Typography
              sx={{
                padding: "0",
                textTransform: "capitalize",
                mx: 1,
              }}
            >
              Categories
            </Typography>
            <Box flexGrow={1} />
          
            <KeyboardArrowRightOutlinedIcon />
          </Button>
        </Tooltip>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          {[
            {text: 'Bikes', icon: <ElectricBikeOutlined fontSize="small" />},
            {text: 'Electronics', icon: <LaptopChromebookOutlined fontSize="small" />},
            {text: 'Books', icon: <MenuBookOutlined fontSize="small" />},
            {text: 'Games', icon: <SportsEsportsOutlined fontSize="small" />},
          ].map((item) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <MenuItem key={item.text} onClick={handleClose}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>

                <ListItemText>{item.text}</ListItemText>
              </MenuItem>
            )
          })}
        </Menu>

      </Box>
  );
}

export default CategoriesMenu;
