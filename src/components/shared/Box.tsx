import React, { ReactNode } from "react";
import { Box } from "@mui/material";

interface CustomBoxProps {
  children?: ReactNode;
  width?: number;
  height?: number;
  margin?: string;
  borderRadius?: number;
  boxShadow?: number;
}

/**
 * A custom box component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the box.
 * @param {number } props.width - The width of the box.
 * @param {number } props.height - The height of the box.
 * @param {string } props.margin - The margin of the box.
 * @param {number} props.borderRadius - The border radius of the box.
 * @param {number} props.boxShadow - The box shadow of the box.
 * @returns {React.ReactElement} The rendered custom box component.
 */
const CustomBox: React.FC<CustomBoxProps> = ({
  children,
  width,
  height,
  margin,
  borderRadius,
  boxShadow,
}: CustomBoxProps): React.ReactElement => {
  return (
    <Box
      sx={{
        width,
        height,
        margin,
        borderRadius,
        boxShadow,
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
      {children}
    </Box>
  );
};

export default CustomBox;
