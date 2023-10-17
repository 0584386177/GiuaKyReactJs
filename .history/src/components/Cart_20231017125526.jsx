import React from 'react';
import styled from 'styled-components';
const CartWrapper = styled.div`
    width: 50px;
    height: 50px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Cart = () => {
    return (
        <CartWrapper>
            <div>
            <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </CartWrapper>
    );
};

export default Cart;