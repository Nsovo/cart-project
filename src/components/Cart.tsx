import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { RootState } from "../store/rootReducer";
import removeFromCart from "../store/slices/cartSlice";
import { formatCurrency } from "../utils/formatCurrency";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

interface CartProps {
  toggleCart: (open: boolean) => () => void;
}

const Cart: React.FC<CartProps> = ({ toggleCart }) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
          Cart
        </Typography>
        <IconButton onClick={toggleCart(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      {cart.length > 0 ? (
        <Grid container spacing={2}>
          {cart.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    transition: "0.3s ease-in",
                    cursor: "pointer",
                    boxShadow: 6,
                  },
                }}
              >
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
                    <b>{item.name}</b>
                  </Typography>
                  <Typography variant="body2" component="p" gutterBottom>
                    {formatCurrency(item.price)}
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
              </Box>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box sx={{ textAlign: "right", marginTop: 2 }}>
              <Typography variant="h6">
                Total: {formatCurrency(total)}
              </Typography>
              <Button>Checkout</Button>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="body1">Your cart is empty</Typography>
      )}
    </Box>
  );
};

export default Cart;
