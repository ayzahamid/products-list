"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Stack, Box } from "@mui/material";
import { createProduct } from "@/clients/product";

const ProductForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      price: ''
    }
  });

  const namePattern = /^[A-Za-z\-]+$/; // Allows letters and dashes
  const currencyPattern = /^\$?\d+(,\d{3})*(\.\d{2})?$/; // Validates USD currency format

  const onSubmit = async (data: { name: string; price: number }) => {
    await createProduct(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Name is required",
            pattern: {
              value: namePattern,
              message: "Invalid characters in name",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Name"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name ? (errors.name.message as string) : ""}
            />
          )}
        />

        <Controller
          name="price"
          control={control}
          rules={{
            required: "Price is required",
            pattern: {
              value: currencyPattern,
              message: "Invalid currency format",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Price"
              variant="outlined"
              error={!!errors.price}
              helperText={errors.price ? (errors.price.message as string) : ""}
            />
          )}
        />

        <Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={isSubmitting}
          >
            Save
          </Button>
        </Box>
      </Stack>
    </form>
  );
};

export default ProductForm;
