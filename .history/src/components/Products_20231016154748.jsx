import React from 'react';
import Product from "./Product";
import styled from 'styled-components';


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