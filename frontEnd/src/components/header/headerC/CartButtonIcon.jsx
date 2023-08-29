// @ts-nocheck
import { Close, ShoppingBagOutlined, ShoppingCart } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductSelectedList from "./ProductSelectedList";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

// eslint-disable-next-line react/prop-types
const CartButtonIcon = () => {
  const theme = useTheme();
  // eslint-disable-next-line react/prop-types
  const { selectedProducts } = useSelector((state) => state.cart);

  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  let subtotal = 0;

  selectedProducts.forEach(
    (item) => (subtotal += Number(item.productPrice) * Number(item.quantity))
  );
  return (
    <>
      <Tooltip title="Shopping Cart">
        <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
          <StyledBadge badgeContent={selectedProducts.length} color="primary">
            <ShoppingCart />
          </StyledBadge>
        </IconButton>
      </Tooltip>

      <Drawer
        anchor={"right"}
        // @ts-ignore
        open={state}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{ width: {xs: 300, sm: 400}, height: "100vh" }} role="presentation">
          <Stack
            p={2}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color:
                  theme.palette.mode == "light"
                    ? "rgb(15, 52, 96)"
                    : theme.palette.info.main,
              }}
            >
              <ShoppingBagOutlined fontSize="large" sx={{fontSize: {xs: 30, sm: '2.1875rem'},}} />
              <Typography sx={{ fontSize: {xs: 13, sm: 17} }}>
                {selectedProducts.length} Item
              </Typography>
            </Box>

            <IconButton
              aria-label="delete"
              size="meduim"
              onClick={toggleDrawer(false)}
            >
              <Close fontSize={"meduim"} />
            </IconButton>
          </Stack>

          <Divider light />

          <ProductSelectedList />

          <Stack
            p={2}
            direction={"column"}
            alignItems={"center"}
            gap={2}
            mt={"auto"}
          >
            <Button
              variant="contained"
              sx={{
                width: "100%",
                m: "auto",
                textTransform: "capitalize",
                backgroundColor:
                  theme.palette.mode == "light" && theme.palette.error.main,
                ":hover": {
                  backgroundColor:
                    theme.palette.mode == "light" && theme.palette.error.dark,
                },
              }}
              onClick={toggleDrawer(false)}
            >
              Checkout Now (${subtotal.toFixed(2)})
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                m: "auto",
                textTransform: "capitalize",
                border:
                  theme.palette.mode == "light" &&
                  `1px solid ${theme.palette.error.light}`,
                color:
                  theme.palette.mode == "light" && theme.palette.error.main,
                backgroundColor:
                  theme.palette.mode == "light" && theme.palette.common.white,
                ":hover": {
                  backgroundColor:
                    theme.palette.mode == "light" && "rgba(210, 63, 87, 0.04)",
                  border:
                    theme.palette.mode == "light" &&
                    `1px solid ${theme.palette.error.dark}`,
                },
              }}
              onClick={toggleDrawer(false)}
            >
              View Cart
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default CartButtonIcon;
