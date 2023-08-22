import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

// eslint-disable-next-line react/prop-types
const Links = ({ title }) => {
  return (
    <Box
      // className="border"
      sx={{
        ":hover .show-when-hover": { display: "block" },
        ":hover": { cursor: "pointer" },

        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">{title}</Typography>

      <ExpandMore sx={{ fontSize: "16px", ml: "4px" }} />

      <Box
        className=" show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "50%",
          transform: " translateX(-50%)",
          display: "none",
          zIndex: 2,
        }}
      >
        <Paper sx={{ mt: 2 }} className=" ">
          <nav aria-label="secondary mailbox folders">
            <List>
              {[
                { text: "Dashboard" },
                { text: "products" },
                { text: "orders" },
                { text: "Profile" },
              ].map((item) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <ListItem
                    disablePadding
                    sx={{
                      ":hover .sub-link": item.text == "products" && {
                        display: "block",
                      },
                      position: "relative",
                    }}
                  >
                    <ListItemButton
                      sx={{
                        display: "flex",
                        p: 0,
                        px: 1.5,
                      }}
                    >
                      <ListItemText
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "15px",
                            fontWeight: 300,
                          },
                        }}
                        primary={item.text}
                      />
                      <Box flexGrow={1} />

                      {item.text == "products" && (
                        <KeyboardArrowRightOutlined fontSize="small" />
                      )}
                    </ListItemButton>

                    <Box
                      className="sub-link"
                      sx={{
                        display: "none",
                        position: "absolute",
                        top: 0,
                        left:
                          title == "Vendor Account" || title == "User Account"
                            ? "-100%"
                            : "100%",
                      }}
                    >
                      <Paper sx={{ ml: 1, mr: 2 ,minWidth: 150 }}>
                        <nav aria-label="secondary mailbox folders">
                          <List>
                            {['Add Product', 'Edit Product']
                            .map((item) => {
                              return (
                                <>
                                  <ListItem disablePadding>
                                    <ListItemButton
                                      sx={{
                                        display: "flex",
                                        p: 0,
                                        px: 1.5,
                                      }}
                                    >
                                      <ListItemText
                                        sx={{
                                          "& .MuiTypography-root": {
                                            fontSize: "15px",
                                            fontWeight: 300,
                                          },
                                        }}
                                        primary={item}
                                      />
                                      <Box flexGrow={1} />
                                    </ListItemButton>
                                  </ListItem>
                                </>
                              )
                            })}

                            

                          </List>
                        </nav>
                      </Paper>
                    </Box>
                    
                  </ListItem>
                );
              })}
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
