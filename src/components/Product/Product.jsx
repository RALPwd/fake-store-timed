import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

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
        <> 
          <p>{product.category}</p>
          <h1>{product.title}</h1>
          <p>Rating: {productRating.rate}</p>
          <p>Reviewed by {productRating.count} persons</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img src={product.image} alt={product.title} />
        </>
      )}
    </>
  )
}

export default Product;