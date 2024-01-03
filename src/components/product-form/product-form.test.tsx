import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductForm from ".";
import { createProduct } from "@/clients/product";

jest.mock("@/clients/product-client");

const mockCreateProduct = createProduct as jest.MockedFunction<typeof createProduct>;

describe("ProductForm", () => {
  it("renders the form with all fields and a submit button", () => {
    const { getByLabelText, getByRole } = render(<ProductForm />);

    expect(getByLabelText(/name/i)).toBeInTheDocument();
    expect(getByLabelText(/price/i)).toBeInTheDocument();
    expect(getByRole("button", { name: /save/i })).toBeInTheDocument();
  });

  it("displays the required error when \"name\" is not provided", async () => {
    const { getByRole, findByText, getByLabelText } = render(<ProductForm />);

    userEvent.type(getByLabelText(/price/i), "123");
    fireEvent.click(getByRole("button", { name: /save/i }));

    expect(await findByText(/name is required/i)).toBeInTheDocument();
  });

  it("displays the required error when \"price\" is not provided", async () => {
    const { getByRole, findByText, getByLabelText } = render(<ProductForm />);

    userEvent.type(getByLabelText(/name/i), "My product");
    fireEvent.click(getByRole("button", { name: /save/i }));

    expect(await findByText(/price is required/i)).toBeInTheDocument();
  });

  it("validates name input pattern", async () => {
    const { getByLabelText, getByRole, findByText } = render(<ProductForm />);

    await act(() => userEvent.type(getByLabelText(/name/i), "123"));
    fireEvent.click(getByRole("button", { name: /save/i }));

    expect(await findByText(/invalid characters in name/i)).toBeInTheDocument();
  });

  it("validates price input pattern", async () => {
    const { getByLabelText, getByRole, findByText } = render(<ProductForm />);

    userEvent.type(getByLabelText(/price/i), "abc");
    fireEvent.click(getByRole("button", { name: /save/i }));

    expect(await findByText(/invalid currency format/i)).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    const mockSubmit = jest.fn();
    mockCreateProduct.mockImplementation(mockSubmit);

    const { getByLabelText, getByRole } = render(<ProductForm />);

    await userEvent.type(getByLabelText(/name/i), "Product");
    await userEvent.type(getByLabelText(/price/i), "100");
    
    fireEvent.click(getByRole("button"));

    await waitFor(() =>
      expect(mockSubmit).toHaveBeenCalledWith({ name: "Product", price: "100" })
    );
  });
});
