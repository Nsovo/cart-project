import { IconButton, Tooltip, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface NavbarProps {
  toggleCart: (open: boolean) => () => void;
}

const Navbar = ({ toggleCart }: NavbarProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "gray",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="links"></div>
      <Box sx={{ color: "white", textAlign: "right" }}>
        <Tooltip title="Cart">
          <IconButton onClick={() => toggleCart(true)()}>
            <ShoppingCartIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        Number of items in a cart
      </Box>
    </Box>
  );
};

export default Navbar;
