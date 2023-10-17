import React from 'react';

const api = "http://localhost:3000/products";

const getProducts = async () => {
    const response = await fetch(api);
    const data = await response.json(); // Parse JSON response
    console.log(data); // Log the parsed data
}

const Page = () => {
    return (
        <div>
            <button onClick={getProducts}>Fetch Products</button>
        </div>
    );
};

export default Page;
