/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './styles.scss';
import { useGetProducts } from '@/hooks/products/useGetProducts';

export const ProductList = () => {
  const { data, isLoading } = useGetProducts();

  return (
    <div className="products-list-container">
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="product-card">
              <Skeleton height={150} />
              <div className="product-description-container">
                <Skeleton height={20} width={200} />
                <Skeleton height={20} width={100} />
              </div>
            </div>
          ))
        : data?.data.map((product, index) => (
            <div key={product.id} className="product-card">
              <img
                className="product-image"
                src={
                  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
              />
              <div className="product-description-container">
                <div className="product-name">
                  <span className="product-accent">{product.name}</span>
                  <span className="product-rate">Nota: {product.rate}</span>
                </div>
                <span className="product-accent">R${product.value}</span>
              </div>
            </div>
          ))}
    </div>
  );
};
