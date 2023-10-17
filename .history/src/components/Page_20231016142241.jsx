import React from 'react';
const api = "http://localhost:3000/products";
const getProducts = async ()=>{
    const repsonse = await fetch(api).then((response)=>{return response});
    console.log(repsonse);
}
const Page = () => {
    
    return (
        <div>
            {getProducts}
        </div>
    );
};

export default Page;