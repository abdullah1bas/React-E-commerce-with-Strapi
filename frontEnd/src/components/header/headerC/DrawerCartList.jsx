// @ts-nocheck
import {
  Add,
  Close,
  Remove,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import {
  Badge,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../../../redux/cartSlice";
// import Button from '@mui/material/Button';

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "inherit",
    color:
      theme.palette.mode == "light"
        ? theme.palette.common.black
        : theme.palette.common.white,
    fontSize: "18px",
    marginTop: "10px",
  },
}));

// eslint-disable-next-line react/prop-types
const DrawerCartList = ({ state, toggleDrawer }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const { selectedProducts } = useSelector((state) => state.cart);

  console.log(selectedProducts);

  let Subtotal = 0;
  const list = () => (
    <Box sx={{ width: 400, height: "100vh" }} role="presentation">
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
          <ShoppingBagOutlined fontSize="large" />
          <Typography sx={{ fontSize: 17 }}>
            {selectedProducts.length} Item
          </Typography>
        </Box>
        <IconButton aria-label="delete" size="meduim" onClick={toggleDrawer(false)}>
          <Close fontSize={"meduim"} />
        </IconButton>
      </Stack>
      <Divider light />

      <Box sx={{ minHeight: "600px", overFlow: "auto" }}>
        {selectedProducts.map((item) => {
          // console.log(item);
          Subtotal += Number(item.productPrice) * Number(item.quantity);
          return (
            <>
              <Stack
                key={item.id}
                gap={2}
                width={"100%"}
                direction={"row"}
                alignItems={"center"}
                py={2}
                px={1}
              >
                <Stack
                  sx={{
                    width: 32,
                    height: "100%",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 3,
                  }}
                >
                  <IconButton
                    sx={{ color: theme.palette.info.main, margin: "-10px" }}
                    onClick={() => {
                      dispatch(increaseQuantity(item));
                    }}
                  >
                    <Add />
                  </IconButton>

                  <StyledBadge badgeContent={item.quantity} color="secondary" />

                  <IconButton
                    sx={{ color: theme.palette.info.main, mt: "10px" }}
                    onClick={() => {
                      dispatch(decreaseQuantity(item));
                    }}
                  >
                    <Remove />
                  </IconButton>
                </Stack>

                <Box sx={{ width: "110px", height: "110px" }}>
                  <img
                    src={item.productImg.data[0].attributes.url}
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>

                <Stack
                  direction={"column"}
                  sx={{ width: "150px", flexGrow: 1, gap: 2 }}
                >
                  <Typography
                    sx={{
                      color:
                        theme.palette.mode == "light"
                          ? theme.palette.common.black
                          : theme.palette.common.white,
                    }}
                  >
                    {item.productTitle.length <= 18
                      ? item.productTitle
                      : `${item.productTitle.slice(0, 18)}...`}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 14,
                      color:
                        theme.palette.mode == "light"
                          ? "rgb(125, 135, 156)"
                          : theme.palette.text.secondary,
                    }}
                  >
                    ${item.productPrice} x {item.quantity}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 16,
                      height: "100%",
                      color: theme.palette.error.main,
                    }}
                  >
                    $
                    {(
                      Number(item.productPrice) * Number(item.quantity)
                    ).toFixed(2)}
                  </Typography>
                </Stack>

                <div>
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    onClick={deleteProduct(item)}
                  >
                    <Close fontSize={"small"} />
                  </IconButton>
                </div>

              </Stack>
              <Divider light />
            </>
          );
        })}
      </Box>

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
            textTransform: 'capitalize',
            backgroundColor:
              theme.palette.mode == "light" && theme.palette.error.main,
            ":hover": {
              backgroundColor:
                theme.palette.mode == "light" && theme.palette.error.dark,
            },
          }}
        >
          Checkout Now (${Subtotal.toFixed(2)})
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: "100%",
            m: "auto",
            textTransform: 'capitalize',
            border:
              theme.palette.mode == "light" &&
              `1px solid ${theme.palette.error.light}`,
            color: theme.palette.mode == "light" && theme.palette.error.main,
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
        >
          View Cart
        </Button>
      </Stack>
    </Box>
  );
  return (
    <Drawer
      anchor={"right"}
      // @ts-ignore
      open={state}
      onClose={toggleDrawer(false)}
    >
      {list()}
    </Drawer>
  );
};

export default DrawerCartList;
