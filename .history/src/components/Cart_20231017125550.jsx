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
const CartItem = styled.div`
    font-size: 20px;
`
const Cart = () => {
    return (
        <CartWrapper>
            <CartItem>
            <i class="fa-solid fa-cart-shopping"></i>
            </CartItem>
        </CartWrapper>
    );
};

export default Cart;