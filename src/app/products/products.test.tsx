import { screen, render } from "@testing-library/react";
import ProductsPage from "./page";

describe("ProductsPage", () => {
  it("renders the page title correctly", () => {
    render(<ProductsPage />);
    expect(screen.getByText("Product")).toBeInTheDocument();
  });
});
