import { Box, Drawer, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { fetchProducts } from "../../store/slices/productSlice";
import { CartItem } from "../../store/initialState";
import { ProductType } from "../../models/enum";
import { RootState } from "../../store/rootReducer";
import Cart from "../Cart";
import CartButton from "../CartButton";
import Product from "./Product";
import CustomPagination from "../shared/Pagination";

const Shop = () => {
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState("");
  const [isCartOpen, setCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Memoizes the products based on the current page and items per page to avoid re-rendering on every state change to enhance performance.
  const memoizedProducts = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    return currentProducts.map((product: ProductType) => (
      <Product
        key={product.id}
        data={product}
        handleAddToCart={() => handleAddToCart(product)}
      />
    ));
  }, [products, currentPage, itemsPerPage]);

  const handleAddToCart = (product: ProductType) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    };

    dispatch(addToCart(cartItem));

    setSuccessMessage("Successfully added to cart!");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  //Toggles the cart open or closed, open: Indicates whether the cart should be open or closed.
  const toggleCart = (open: boolean) => () => {
    setCartOpen(open);
  };

  //Handles the pagination of the products, pageNumber: The current page number.
  const paginate = (_event: React.ChangeEvent<unknown>, pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box>
      <CartButton toggleCart={toggleCart} />
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

      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}

      <Box sx={{ flexGrow: 1 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Grid container spacing={2} justifyContent="center">
            {memoizedProducts}
          </Grid>
        </Suspense>
      </Box>

      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart(false)}>
        <Cart toggleCart={toggleCart} />
      </Drawer>

      <CustomPagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / itemsPerPage)}
        onPageChange={paginate}
      />
    </Box>
  );
};

export default Shop;
