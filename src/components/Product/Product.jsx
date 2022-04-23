import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Rating from 'react-rating';
import Loader from '../Loader/Loader';
import styles from './Product.module.scss';

function Product() {
  const [product, setProduct] = useState([]);
  const [productRating, setProductRating] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const data = await response.json();
      console.log(data);
      setProduct(data);
      setProductRating(data.rating);
      setLoading(false);
    };
    fetchData();
  }, []);


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.productcontainer}>
          <div className={styles.productcontainer__product}>
            <div className={styles.productcontainer__image}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.productcontainer__details}>
              <p className={styles.productcontainer__details__category}>{product.category}</p>
              <h1>{product.title}</h1>
              <Rating initialRating={productRating.rate} readonly/>
              <p>Rating: {productRating.rate}</p>
              <p>Reviewed by {productRating.count} persons</p>
              <p>{product.description}</p>
              <p className={styles.productcontainer__details__price}>${product.price}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Product;