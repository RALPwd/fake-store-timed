import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
const API = 'https://fakestoreapi.com/products';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API);
            const data = await response.json();
            console.log(data);
            setProducts(data);
        };
        fetchData();
    }, []);

    const handleProductDetail = (product) => {
        console.log(product);
    };

    return (
        <div className={styles.product}>
            {products.map(product => (
                <div key={product.id} className={styles.product__card}>
                    <div className={styles.product__card__details}>
                        <div className={styles.product__card__category}>{product.category}</div>
                        <h3 className={styles.product__card__title}>{product.title}</h3>
                        <p className={styles.product__card__price}>${product.price}</p>
                        <button type='button' onClick={handleProductDetail}>Ver más</button>
                    </div>
                    <div className={styles.product__card__imagecontainer}>
                        <img src={product.image} alt={product.title} className={styles.product__card__image}/>
                    </div>
                </div>
            ))}
        </div>
    );
}
