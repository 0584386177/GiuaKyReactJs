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

const Page = () => {
    const [data,setData] = useState([])
    console.log(data);
    useEffect(()=>{
       try{
        const getProducts = async ()=>{
            const response = await fetch(api);
            const data = await response.json();
            setData(data);
        }
       }catch(err){
            console.log(error);
       }
       getProducts();
       console.log(data);
    },[])
    return (
        <PageWrapper>
            <Sizes/>
            <Products
                {data}
            />
            <Cart/>
            <CartShow/>
        </PageWrapper>
    );
};

export default Page;