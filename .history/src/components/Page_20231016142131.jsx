import React from 'react';
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
            {}
        </div>
    );
};

export default Page;