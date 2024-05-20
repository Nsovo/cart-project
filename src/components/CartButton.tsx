import { Box, IconButton, Tooltip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface CartButtonProps {
  toggleCart: (open: boolean) => () => void;
}

const CartButton = ({ toggleCart }: CartButtonProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '98%', padding: 2, backgroundColor: "gray", }}>
      <Box sx={{ color: 'white', textAlign: 'right' }}>
        <Tooltip title="Cart">
          <IconButton onClick={() => toggleCart(true)()}>
            <ShoppingCartIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default CartButton;
