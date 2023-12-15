import { useProductsService } from '@/services/products';
import { useQuery } from '@tanstack/react-query';

export const queryKey = 'get-products';

export const useGetProducts = () => {
  const useGet = () => useProductsService().list();

  const query = useQuery({
    queryKey: [queryKey],
    queryFn: useGet,
  });

  return query;
};
