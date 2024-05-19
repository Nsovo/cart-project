import React from "react";
import Button from "@mui/material/Button";
import { ButtonSize } from "../../models/ProductType";


interface ButtonProps {
  name: string;
  onClick: () => void;
  startIcon: React.ReactNode;
  buttonSize: ButtonSize;
}

const SubmitButton = ({ name, onClick, startIcon, buttonSize }: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      color="inherit"
      onClick={onClick}
      startIcon={startIcon}
      size={buttonSize}
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
      {" "}
      {name}
    </Button>
  );
};

export default SubmitButton;
