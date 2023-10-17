import React, { useEffect, useState } from 'react';
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
    const [data,setData] = useState(null);
    useEffect(()=>{
        getProducts();
        setData(getProducts);
    },[])
    return (
        <PageWrapper>
            <Sizes/>
            <Products
        {data.map((ite))}
            />
            <Cart/>
            <CartShow/>
        </PageWrapper>
    );
};

export default Page;