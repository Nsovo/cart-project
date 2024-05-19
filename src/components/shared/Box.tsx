import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

interface CustomBoxProps {
  children?: ReactNode;
  width?: number;
  height?: number;
  margin?: string;
  borderRadius?:number;
  boxShadow?:number;

}

const CustomBox: React.FC<CustomBoxProps> = ({
  children,
  width,
  height,
  margin,
}) => {
  return (
    <Box
      sx={{
        width,
        height,
        margin,
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
