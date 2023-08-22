/* eslint-disable react/prop-types */
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Stack, Typography, useTheme } from "@mui/material";

const MainHeader = ({
  myDate,
  handleAlignment,
  allProductsAPI,
  menCategoryAPI,
  womenCategoryAPI,
  jeweleryCategoryAPI,
}) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      gap={3}
    >
      <Box>
        <Typography variant="h6">Selected Products</Typography>
        <Typography fontWeight={300} variant="body1">
          All our new arrivals in a exclusive brand selection
        </Typography>
      </Box>

      <ToggleButtonGroup
        color="error"
        value={myDate}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
          ".Mui-selected": {
            border: "1px solid rgba(233, 69, 96, 0.5) !important",
            color: "#e94560",
            backgroundColor: "initial",
          },
        }}
      >
        {[
          { aria: "left aligned", name: "All Products", value: allProductsAPI },
          { aria: "centered", name: "Men Category", value: menCategoryAPI },
          {
            aria: "right aligned",
            name: "Women Category",
            value: womenCategoryAPI,
          },
          {
            aria: "right aligned",
            name: "Jewelery Category",
            value: jeweleryCategoryAPI,
          },
        ].map((item) => {
          return (
            <ToggleButton
              key={item.name}
              sx={{
                mr: item.name != "Jewelery Category" ? "16px !important" : null,
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.divider} !important`,
                textTransform: 'capitalize',
              }}
              className="myButton"
              value={item.value}
              aria-label={item.aria}
            >
              {item.name}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Stack>
  );
};

export default MainHeader;
