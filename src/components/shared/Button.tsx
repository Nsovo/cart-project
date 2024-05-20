import React from "react";
import Button from "@mui/material/Button";
import { ButtonSize } from "../../models/enum";

interface ButtonProps {
  text: string;
  onClick: () => void;
  startIcon: React.ReactNode;
  buttonSize: ButtonSize;
}

/**
 * SubmitButton component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display on the button.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @param {ReactNode} props.startIcon - The icon to display at the start of the button.
 * @param {string} props.buttonSize - The size of the button.
 * @returns {JSX.Element} The rendered SubmitButton component.
 */
const SubmitButton = ({
  text,
  onClick,
  startIcon,
  buttonSize,
}: ButtonProps): JSX.Element => {
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
      {text}
    </Button>
  );
};

export default SubmitButton;
