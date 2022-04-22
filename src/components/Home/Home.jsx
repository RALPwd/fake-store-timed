import React, { useState, useEffect } from 'react';
import ProductLink from '../ProductLink/ProductLink';
import Loader from '../Loader/Loader';
import styles from './Home.module.scss';
const API = 'https://fakestoreapi.com/products';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.product}>
          {products.map(product => (
            <div key={product.id} className={styles.product__card}>
              <div className={styles.product__card__details}>
                <div className={styles.product__card__category}>{product.category}</div>
                <h3 className={styles.product__card__title}>{product.title}</h3>
                <p className={styles.product__card__price}>${product.price}</p>
                <ProductLink product={product.id} />
              </div>
              <div className={styles.product__card__imagecontainer}>
                <img src={product.image} alt={product.title} className={styles.product__card__image}/>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
