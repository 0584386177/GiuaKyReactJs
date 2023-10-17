import React, { useEffect } from 'react';
const api = "http://localhost:3000/products";
const getProducts = async ()=>{
    const response = await fetch(api);
    const data = await response.json();
    
}
const Page = () => {
    useEffect(()=>{
        getProducts();
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Page;