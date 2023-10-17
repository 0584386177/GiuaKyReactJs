import React from 'react';
const api = "http://localhost:3000/products";
const getProducts = async ()=>{
    const response = await fetch(api);
    console.log(response);
}
const Page = () => {
    
    return (
        <div>
            {getProducts}
        </div>
    );
};

export default Page;