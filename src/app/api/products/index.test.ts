import fetchMock from 'jest-fetch-mock';
import { GET } from './route';

describe('GET /api/products', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('successfully fetches a list products', async () => {
    const mockData = { products: [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ] };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const response = await GET();
    const responseData = await response.json();

    expect(responseData).toEqual({ data: mockData });
    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API}/products`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  it('handles fetch failure with status 500', async () => {
    fetchMock.mockRejectOnce(new Error('API is down'));

    const response = await GET();
    const responseData = await response.json();

    expect(responseData.error).toBe('API is down');
    expect(response.status).toBe(500);
  });
});
