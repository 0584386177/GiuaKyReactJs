import React from 'react';
import Data from "./data/Data"
import axios from 'axios';

const getProducts=()=>{
    return axios
    .get("http://localhost:3000/products")
    .then((response)=>{
        console.log(response)
    })
}
const Page = () => {
    
    return (
        <div>
            
        </div>
    );
};

export default Page;