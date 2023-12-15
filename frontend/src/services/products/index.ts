import { api } from '../api';
import { urls } from '../urls';
import { GetProductsResponse } from './types';

export const useProductsService = () => {
  const list = () => {
    return api.get<GetProductsResponse>(urls.products);
  };

  return { list };
};
