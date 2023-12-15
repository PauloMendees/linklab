import { useProductsService } from '@/services/products';
import { useQuery } from '@tanstack/react-query';

export const useGetProducts = () => {
  const useGet = () => useProductsService().list();

  const query = useQuery({
    queryKey: ['get-products'],
    queryFn: useGet,
  });

  return query;
};
