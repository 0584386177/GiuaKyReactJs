import React from 'react';
import styled from 'styled-components';
const CartWrapper = styled.div`
    width: 60px;
    height: 60px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`
const CartItem = styled.div`
    font-size: 25px;
    position: relative;
    &&:before{
        content: "";
        position: absolute;
        bottom :0;
        right: 0;
        width: 25px;
         }
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