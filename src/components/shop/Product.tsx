import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { ButtonSize } from "../../models/enum";
import { formatCurrency } from "../../utils/formatCurrency";
import CustomBox from "../shared/Box";
import SubmitButton from "../shared/Button";


export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductProps {
  data: Product;
  handleAddToCart: () => void;
}

const Product = ({ data, handleAddToCart }: ProductProps): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <CustomBox width={300} height={420} margin="20px auto">
        <img src={data.image} alt={data.name} style={{ width: "100%" }} />
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <Typography variant="body1" component="p" gutterBottom>
            <strong>{data.name}</strong>
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            {formatCurrency(data.price)}
          </Typography>
        </Box>
        <Tooltip title="Add to cart">
          <SubmitButton
            onClick={handleAddToCart}
            startIcon={<AddShoppingCartIcon />}
            text=" Add to Cart"
            buttonSize={ButtonSize.MEDIUM}
          />
        </Tooltip>
      </CustomBox>
    </Grid>
  );
};

export default Product;
