import React from 'react';
const api = "http://localhost:3000/products";
const getProducts = async ()=>{
    const repsonse = await fetch(api).then((response) return response);
}
const Page = () => {
    
    return (
        <div>
            {}
        </div>
    );
};

export default Page;