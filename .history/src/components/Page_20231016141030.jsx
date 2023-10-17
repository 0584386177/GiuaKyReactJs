import React from 'react';
import Data from "./data/Data"
import axios from 'axios';

const getProducts=()=>{
    fetch("http://localhost:3000/products")
    .then((response)=>{})
}
const Page = () => {
    
    return (
        <div>
            {getProducts}
        </div>
    );
};

export default Page;