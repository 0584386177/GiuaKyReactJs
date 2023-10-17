import React from 'react';
import styled from 'styled-components';
const CartWrapper = styled.div`
    width: 60px;
    height: 60px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`
const CartItem = styled.button`
    font-size: 25px;
    color: white;

    
`
const handleOpenCart = ()=>{

}
const Cart = () => {
    return (
        <CartWrapper>
            <CartItem onClick={handleOpenCart}>
            <i class="fa-solid fa-cart-shopping"></i>
            </CartItem>

            <CartShow/>
        </CartWrapper>
    );
};

export default Cart;