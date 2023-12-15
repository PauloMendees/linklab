/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import './styles.scss';

export const ProductList = () => {
  return (
    <div className="products-list-container">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="product-card">
          <img
            className="product-image"
            src={
              'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          />
          <div className="product-description-container">
            <div className="product-name">
              <span className="product-accent">teste</span>
              <span className="product-rate">description</span>
            </div>
            <span className="product-accent">R$200,00</span>
          </div>
        </div>
      ))}
    </div>
  );
};
