import React, { useEffect } from 'react';
const api = "http://localhost:3000/products";
const getProducts = async ()=>{
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
}
const Products = () => {
    useEffect(()=>{
        getProducts();
    },[]);
    return (
        <div>
            
        </div>
    );
};

export default Products;