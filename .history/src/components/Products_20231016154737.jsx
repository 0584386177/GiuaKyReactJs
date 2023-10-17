import React from 'react';
import Product from "./Product";
import 
const Products = () => {
    return (
        <div>
            {Array(10).fill(null).map((item,index)=>{
                return <Product key={index}></Product>
            })}
        </div>
    );
};

export default Products;