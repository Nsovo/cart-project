import { formatCurrency } from "../../utils/formatCurrency";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import { ButtonSize, ProductType } from "../../models/ProductType";
import SubmitButton from "../shared/Button"; // Import the SubmitButton component
import CustomBox from "../shared/Box";

interface ProductProps {
  data: ProductType;
  handleAddToCart: () => void;
}

const Product = ({ data, handleAddToCart }: ProductProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <CustomBox width={300} height={420} margin="20px auto">
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
          <SubmitButton
            onClick={handleAddToCart}
            startIcon={<AddShoppingCartIcon />}
            name=" Add to Cart"
            buttonSize={ButtonSize.MEDIUM}
          />
        </Tooltip>
      </CustomBox>
    </Grid>
  );
};

export default Product;
