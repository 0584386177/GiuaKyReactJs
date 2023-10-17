import React from "react";
import styled from "styled-components";
const CartWrapper = styled.div`
  position: fixed;
  width: 400px;
  height: 100%;
  top: 0;
  right: 0;
  background: #1c1a20;
  z-index: 9999;
  color: white;
  display: none;
   
   &&.active{
    display: block;
   }
`;

const CartClose = styled.div`
  color: white;
  padding: 5px;
  font-size: 25px;
  padding: 10px;
  cursor: pointer;
`;

const CartTitle = styled.div`
  font-size: 40px;
  text-align: center;
  padding: 15px 0px;
  border-bottom: 1px solid black;
`;
const CartItem = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid black;
`
const CartLeft = styled.div`
    display:flex;
    align-items: center;
`

const CartImage = styled.div`
    width: 80px;
    height: 90px;
`
const CartImg = styled.img`
    width: 100%;
    height: 100%;
`
const CartInfor = styled.div`
    font-size: 16px;
    margin-left:5px;
`

const CartRight = styled.div`
    position: relative;
    width:  100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
 `

const CartCloseItem = styled.div`
    position: absolute;
    top: 0;
    right:0;
    cursor: pointer;
`
const CartPrice = styled.div`
    color:yellow;
`
const CartShow = () => {
  return (
    <div>
      <CartWrapper className={``}>
        <CartClose className="cartClose">X</CartClose>
        <CartTitle className="cartTitle">
          <h1>CART</h1>
        </CartTitle>

        <CartItem className="cartItem">
          <CartLeft className="left">
            <CartImage className="img">
              <CartImg src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ea23642dfe640579360af42012429db_9366/Harden_Travel_Hoodie_Black_IC0218_21_model.jpg"></CartImg>
            </CartImage>
            <CartInfor className="infor">
              <div className="name">Basic Cactus White T-shirt</div>
            </CartInfor>
          </CartLeft>

          <CartRight className="right">
            <CartCloseItem className="close">X</CartCloseItem>
            <CartPrice className="price">$23,32</CartPrice>
          </CartRight>
        </CartItem>
      </CartWrapper>
    </div>
  );
};

export default CartShow;
