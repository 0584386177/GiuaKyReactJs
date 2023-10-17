import React from 'react';
import Product from "./Product";
const Products = () => {
    return (
        <div>
            {Array(10).fill(null).map((item,index))}
        </div>
    );
};

export default Products;