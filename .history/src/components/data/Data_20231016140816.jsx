import axios from 'axios';
import React from 'react';
    
export default function Data(){
    const getProducts = ()=>{
        return axios
        .get("http://localhost:3000/products")
        .then((response)=>{
            console.log(response);
        })
    }
};