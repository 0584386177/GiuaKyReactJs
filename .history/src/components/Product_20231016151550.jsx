import React from 'react';
import styled from 'styled-components';
const Product = () => {
    return (
        <div>
                <p>10 Products found</p>
            <div className='product'>
                <img src='https://source.unsplash.com/random' alt=''/>
                <h5>Khanh Hoa</h5>
                <p>100000 <span>đ</span></p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};\
export default Product;