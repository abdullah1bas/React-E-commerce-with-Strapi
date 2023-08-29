import {
  Box,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductsByNameQuery } from "../../redux/product";
import MainHeader from "./MainHeader";
import MainProducts from "./MainProducts";

const Main = () => {
  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setmyDate(newValue);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProductsAPI = "products?populate=*";
  // &(And), filters[category][$eq]=men rg3le
  // [obj.key(category)][$eq(== equal)]=value(men)
  const menCategoryAPI = "products?populate=*&filters[category][$eq]=men";
  const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women";
  const jeweleryCategoryAPI =
    "products?populate=*&filters[category][$eq]=jewelery";
  const electronicCategoryAPI =
    "products?populate=*&filters[category][$eq]=electronics";

  const [myDate, setmyDate] = useState(allProductsAPI);
  const { data, error, isLoading } = useGetproductsByNameQuery(myDate);
  const [clickedProduct, setClickedProduct] = useState({});

  // console.log(clickedProduct)

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          py: 11,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>

        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  }

  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <MainHeader
          {...{
            myDate,
            handleAlignment,
            allProductsAPI,
            menCategoryAPI,
            womenCategoryAPI,
            jeweleryCategoryAPI,
            electronicCategoryAPI,
          }}
        />

        <MainProducts {...{ data, setClickedProduct, handleClickOpen }} />

        {/* anyWhere */}
        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          <ProductDetails {...{clickedProduct}} />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
