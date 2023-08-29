/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const MainHeader = ({
  myDate,
  handleAlignment,
  allProductsAPI,
  menCategoryAPI,
  womenCategoryAPI,
  jeweleryCategoryAPI,
  electronicCategoryAPI,
}) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={{xs: 'center', sm: "space-between"}}
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
          {
            aria: "right aligned",
            name: "Electronics Category",
            value: electronicCategoryAPI,
          },
        ].map((item) => {
          return (
            <ToggleButton
              key={item.name}
              sx={{
                mr:
                  item.name != "Electronics Category"
                    ? { xs: "10px !important", sm: "16px !important" }
                    : null,
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.divider} !important`,
                textTransform: "capitalize",
                // fontSize: { xs: "10px", sm: "0.875rem" },
                fontSize: "0.875rem" ,
                px: {xs: '10px !important', sm: '11px !important'}
                // '.css-1uqdoiu-MuiToggleButtonGroup-root .MuiToggleButtonGroup-grouped' :{
                // },
              }}
              className="myButton"
              value={item.value}
              aria-label={item.aria}
            >
              {useMediaQuery("(min-width:500px)") && item.name}
              {useMediaQuery("(max-width:500px)") && item.name.split(' ')[0]}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Stack>
  );
};

export default MainHeader;
