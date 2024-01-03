import { v4 as uuidv4 } from "uuid";

const API_ROOT = "/api/products/";

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_ROOT);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error("There was an error fetching the products:", error);
  }
};

export const createProduct = async ({
  name,
  price,
}: {
  name: string;
  price: number;
}) => {
  try {
    const payload = {
      id: uuidv4(),
      name,
      price,
    };

    const response = await fetch(API_ROOT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("There was an error creating the product:", error);
  }
};
