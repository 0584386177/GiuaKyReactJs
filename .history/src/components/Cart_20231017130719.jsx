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
const CartSymbol = styled.button`
    font-size: 25px;
    color: white;

    
`
const CartShow = styled.div`

`
const handleOpenCart = ()=>{

}
const Cart = () => {
    return (
        <CartWrapper>
            <CartSymbol onClick={handleOpenCart}>
            <i class="fa-solid fa-cart-shopping"></i>
            </CartSymbol>

            <CartShow>
                <div className='cartClose'>

                </div>
                <div className='cartTitle'>

                </div>

                <div className='cartItem'>
                    
                </div>
            </CartShow>
        </CartWrapper>
    );
};

export default Cart;