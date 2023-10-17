import axios from 'axios';
import React from 'react';
    
const Data = () => {
    const getProducts = ()=>{
        return axios
        .get("http://localhost:3000/products");
        .then((response)=>{
            console.log(response)
        })
    }
    return (
        <div>
            
        </div>
    );
};

export default Data;