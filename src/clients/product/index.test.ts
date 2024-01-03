import fetchMock from 'jest-fetch-mock';

console.error = jest.fn();

import { fetchProducts } from '.';

describe('Products client', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('fetchProducts', () => {
    it('fetches products successfully', async () => {
      const mockProducts = [{ id: 1, name: 'Product 1', price: 100 }];
      fetchMock.mockResponseOnce(JSON.stringify({ data: mockProducts }));
  
      const products = await fetchProducts();
  
      expect(products).toEqual(mockProducts);
      expect(fetch).toHaveBeenCalledWith('/api/products/');
    });
  
    it('throws an error when the fetch fails', async () => {
      fetchMock.mockRejectOnce(new Error('Failed to fetch'));
  
      await expect(fetchProducts()).resolves.toBeUndefined();
      expect(console.error).toHaveBeenCalledWith(expect.anything(), expect.any(Error));
    });
  })

});
