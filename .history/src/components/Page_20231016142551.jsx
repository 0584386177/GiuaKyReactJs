import React from 'react';
const api = "http://localhost:3000/products";
const getProducts = async ()=>{
    const response = await fetch(api).then((response)=>{return response});
    const data =response.json();
}
const Page = () => {
    
    return (
        <div>
            {getProducts}
        </div>
    );
};

export default Page;