import { useState } from "react";
import Product from "./Product";
import PRODUCTS from "../../assets/data/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { RootState } from "../../store/rootReducer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Navbar from "../Navbar";
import { ProductType } from "../../models/ProductType";
import Cart from "../Cart";

const Shop = () => {
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState("");
  const [isCartOpen, setCartOpen] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    setSuccessMessage("Successfully added to cart!");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const toggleCart = (open: boolean) => () => {
    setCartOpen(open);
  };

  return (
    <Box>
      <Navbar toggleCart={toggleCart} />
      <Box sx={{ width: "100%", textAlign: "center", marginTop: 4 }}>
        <Typography variant="h1" gutterBottom>
          Little Fish Shop
        </Typography>
      </Box>

      {successMessage && (
        <Box
          sx={{
            color: "green",
            backgroundColor: "#d4edda",
            border: "1px solid #c3e6cb",
            padding: 2,
            margin: 2,
            borderRadius: 1,
            textAlign: "center",
          }}
        >
          {successMessage}
        </Box>
      )}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center">
          {PRODUCTS.map((product: ProductType) => (
            <Product
              key={product.id}
              data={product}
              handleAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </Grid>
      </Box>

      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart(false)}>
        <Cart toggleCart={toggleCart} />
      </Drawer>
    </Box>
  );
};

export default Shop;
