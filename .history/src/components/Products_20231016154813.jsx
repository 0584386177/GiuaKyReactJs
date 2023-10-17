import React from 'react';
import Product from "./Product";
import styled from 'styled-components';
const ProductList = styled.div`
342w13rftkjn98i7o
`
const Products = () => {
    return (
        <ProductList>
            {Array(10).fill(null).map((item,index)=>{
                return <Product key={index}></Product>
            })}
        </ProductList>
    );
};

export default Products;