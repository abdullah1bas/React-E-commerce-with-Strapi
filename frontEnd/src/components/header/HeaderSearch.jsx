import { ShoppingCartOutlined } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import SearchSelect from "./headerC/SearchSelect";
import CartButtonIcon from "./headerC/CartButtonIcon";
import AccountSettings from "./headerC/AccountSettings";

const HeaderSearch = () => {
  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography variant="body2">E-commerce</Typography>
      </Stack>

      <SearchSelect />

      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <CartButtonIcon />

        <AccountSettings />
      </Stack>
    </Container>
  );
};

export default HeaderSearch;
