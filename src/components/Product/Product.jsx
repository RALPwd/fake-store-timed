import React, { useState, useEffect } from 'react';

function Product() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://fakestoreapi.com/products/1'
            );
            const data = await response.json();
            console.log(data);
            setProduct(data);
        };
        fetchData();
    }, []);

    return (
        <div>{product.title}</div>
    );
}

export default Product;