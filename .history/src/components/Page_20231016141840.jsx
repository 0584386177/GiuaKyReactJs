import React from 'react';
import axios from 'axios';
const api = "http://localhost:3000/products";
const getProducts = ()=>{
    return axios
}
const Page = () => {
    
    return (
        <div>
            {getProducts}
        </div>
    );
};

export default Page;