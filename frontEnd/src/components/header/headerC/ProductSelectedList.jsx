// @ts-nocheck
import {
  Add,
  Close,
  Remove,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../../../redux/cartSlice";
import Swal from "sweetalert2";
import './headerC.css'


const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: true
})

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

const ProductSelectedList = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const { selectedProducts } = useSelector((state) => state.cart);

  return (
    <Box sx={{ minHeight: "600px", overFlow: "auto" }}>
        {selectedProducts.map((item) => {
          return (
            <Box key={item.id}>
              <Stack
                
                gap={2}
                width={"100%"}
                direction={"row"}
                alignItems={"center"}
                py={2}
                px={1}>
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
                    disabled={item.quantity <= 1 && true}
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

                <Box>
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    onClick={ () =>
                      {swalWithBootstrapButtons.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, delete it!',
                        cancelButtonText: 'No, cancel!',
                        reverseButtons: true
                      }).then((result) => {
                        if (result.isConfirmed) {
                          swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                            )
                            deleteProduct(item)
                        } else if (
                          /* Read more about handling dismissals below */
                          result.dismiss === Swal.DismissReason.cancel
                        ) {
                          swalWithBootstrapButtons.fire(
                            'Cancelled',
                            'Your imaginary file is safe :)',
                            'error'
                          )
                        }
                      })}
                      
                    }
                  >
                    <Close fontSize={"small"} />
                  </IconButton>
                </Box>

              </Stack>
              <Divider light />
            </Box>
          )
        })}
      </Box>
  );
}

export default ProductSelectedList;
