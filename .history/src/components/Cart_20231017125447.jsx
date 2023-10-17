import React from 'react';
import styled from 'styled-components';
const CardWrapper = styled.div`
    width: 50px;
    height: 50px;
    background-color: black;
    color: white;
`
const Cart = () => {
    return (
        <CardWrapper>
            <div>
            <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </CardWrapper>
    );
};

export default Cart;