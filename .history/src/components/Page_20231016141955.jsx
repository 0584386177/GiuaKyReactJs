import React from 'react';
import axios from 'axios';
const api = "http://localhost:3000/products";
const getProducts = ()=>{
    return axios
    .get(api)
    .then((response)=> {
        return response.json();
    })
}
const Page = () => {
    
    return (
        <div>
            {console.log(getProducts)}
        </div>
    );
};

export default Page;