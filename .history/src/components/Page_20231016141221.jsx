import React from 'react';
import Data from "./data/Data"
import axios from 'axios';
const api = "http://localhost:3000/products";
const getProducts= async ()=>{
    const response = await fetch(api).then((data)=>{
        console.log(data);
    })

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