import React from 'react';
const api = "http://localhost:3000/products";
const getProducts = async ()=>{
    const respsonse = await fetch(api).then((response)=>{return response});
    console.log(respnse);
}
const Page = () => {
    
    return (
        <div>
            {getProducts}
        </div>
    );
};

export default Page;