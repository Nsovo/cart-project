import React from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, pageNumber: number) => void;
}

/**
 * Renders a custom pagination component.
 * @param {number} currentPage - The current page number.
 * @returns {JSX.Element} The custom pagination component.
 */
const CustomPagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: CustomPaginationProps): JSX.Element => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Pagination count={totalPages} page={currentPage} onChange={onPageChange} color="primary" />
        </Box>
    );
};

export default CustomPagination;