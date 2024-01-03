import type { Metadata } from "next";
import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import ProductForm from "@/components/product-form";

export const metadata: Metadata = {
  title: "New Product",
};

const ProductsPage: React.FC = () => {
  return (
    <Container>
      <Stack p={4} spacing={3} borderRadius={2} bgcolor="white">
        <Typography variant="h4">Product</Typography>
        <ProductForm />
      </Stack>
    </Container>
  );
};

export default ProductsPage;
