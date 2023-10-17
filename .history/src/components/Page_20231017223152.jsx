import React, { useEffect } from 'react';
import Sizes from "./Sizes"
import Products from "./Products"
import Cart from "./Cart"
import CartShow from "./CartShow"
import styled from 'styled-components';
const PageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    
`
const api = "http://localhost:3000/products";
const getProducts = async ()=>{
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
}
const Page = () => {
    useEffect(()=>{
        getProducts();
    },[])
    return (
        <PageWrapper>
            <Sizes/>
            <Products
                {getProducts.map((item,index)=>{
                    
                })}
            />
            <Cart/>
            <CartShow/>
        </PageWrapper>
    );
};

export default Page;