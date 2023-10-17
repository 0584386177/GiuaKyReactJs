import React from "react";
import styled from "styled-components";
const CartWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: relative;
`;
const CartSymbol = styled.button`
  font-size: 25px;
  color: white;
`;
const CartShow = styled.div`
    position: fixed;
    width: 800px;
    height: 100%;
    background: #1C1A20;
    z-index: 9999;
    color: white;
`;

const CartClose = styled.div`
    color: white;
    padding: 5px;
    margin-top: 10px;
`

const CartTitle = styled.div`
  margin: 0 auto;
  font-size : 20px ;
`
const handleOpenCart = () => {};
const Cart = () => {
  return (
    <CartWrapper>
      <CartSymbol onClick={handleOpenCart}>
        <i class="fa-solid fa-cart-shopping"></i>
      </CartSymbol>

     
    </CartWrapper>
  );
};

export default Cart;
