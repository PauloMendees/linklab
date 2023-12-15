export type Product = {
  id: string;
  name: string;
  image: string;
  value: number;
  rate: number;
};

export type GetProductsResponse = Product[];
