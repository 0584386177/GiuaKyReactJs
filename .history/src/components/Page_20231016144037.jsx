import React, { useEffect } from 'react';
import Sizes from "./Sizes"
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
        <div>
            <Sizes/>
        </div>
    );
};

export default Page;