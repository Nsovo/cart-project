import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { removeCartItem } from "../store/slices/cartSlice";
import { formatCurrency } from "../utils/formatCurrency";
import CustomBox from "./shared/Box";
import PayPalPayment from "./payment/PayPalPayment";
import CustomPagination from "./shared/Pagination";

const MIN_ITEMS_FOR_PAGINATION = 3;

interface CartProps {
  toggleCart: (open: boolean) => () => void;
}

const Cart = ({ toggleCart }: CartProps) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  //Calculates the total number of items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  //Calculates the total amount of the items in the cart
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  //Calculates the total number of pages based on the number of items in the cart and the items per page.
  const totalPages = Math.ceil(cart.length / itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleRemove = (id: number) => {
    dispatch(removeCartItem(id));
  };

  // Retrieves a paginated subset of items from the cart array,currentPage:The current page number and itemsPerPage: The number of items to display per page.
  const paginatedItems = cart.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ width: 300, padding: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Cart {totalItems > 0 && `(${totalItems} ${totalItems === 1 ? "item" : "items"})`}
        </Typography>
        <IconButton onClick={toggleCart(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      {cart.length > 0 ? (
        <Grid container spacing={2}>
          {paginatedItems.map((item) => (
            <Grid item xs={12} key={item.id}>
              <CustomBox borderRadius={2} boxShadow={3}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "cover",
                  }}
                />
                <Box sx={{ textAlign: "center", marginTop: 2 }}>
                  <Typography variant="body1" component="p" gutterBottom>
                    <strong>{item.name}</strong>
                  </Typography>
                  <Typography variant="body2" component="p" gutterBottom>
                    {formatCurrency(item.price)} x {item.quantity}
                  </Typography>
                </Box>
                <Tooltip title="Remove from cart">
                  <IconButton
                    onClick={() => handleRemove(item.id)}
                    color="secondary"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </CustomBox>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box sx={{ textAlign: "right", marginTop: 2 }}>
              <Typography variant="h6">
                Total: {formatCurrency(totalAmount)}
              </Typography>
              <PayPalPayment totalAmount={totalAmount} />
            </Box>
          </Grid>
          {cart.length >= MIN_ITEMS_FOR_PAGINATION && (
            <Grid item xs={12}>
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </Grid>
          )}
        </Grid>
      ) : (
        <Typography variant="body1">Your cart is empty</Typography>
      )}
    </Box>
  );
};

export default Cart;