import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Tooltip from "@mui/material/Tooltip";

type ProductProps = {
  data: ProductType;
  handleAddToCart: () => void;
};

const Product: React.FC<ProductProps> = ({ data, handleAddToCart }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box
        sx={{
          width: 300,
          height: 420,
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          "&:hover": {
            transition: "0.3s ease-in",
            cursor: "pointer",
            boxShadow: 6,
          },
        }}
      >
        <img src={data.image} alt={data.name} style={{ width: "100%" }} />
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <Typography variant="body1" component="p" gutterBottom>
            <b>{data.name}</b>
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            {formatCurrency(data.price)}
          </Typography>
        </Box>
        <Tooltip title="Add to cart">
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleAddToCart}
            startIcon={<AddShoppingCartIcon />}
            sx={{
              backgroundColor: "transparent",
              border: "2px solid rgb(19, 19, 19)",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "rgb(19, 19, 19)",
                color: "white",
              },
            }}
          >
            Add to Cart
          </Button>
        </Tooltip>
      </Box>
    </Grid>
  );
};

export default Product;
