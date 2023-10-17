import React, { useEffect } from 'react';
import Sizes from "./Sizes"
import Products from "./Products"
import styled from 'styled-components';
const PageWrapper = styled.div`

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
            <Products/>
        </PageWrapper>
    );
};

export default Page;