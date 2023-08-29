import { useContext } from "react";
import { ColorModeContext } from "../../../theme";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const ModeIcon = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <div>
      {theme.palette.mode === "light" ? (
        <Tooltip title='Light Mode'>
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title='Dark Mode'>
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <DarkModeOutlined sx={{ fontSize: "16px" }} />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
};

export default ModeIcon;
