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

`;

const CartClose = styled.div`
  color: white;
  padding: 5px;
  width: 20px;
  height: 20px;
  background-color: black;
`;

const CartTitle = styled.div`
  font-size: 40px;
  text-align: center;
  padding: 15px 0px;
`;
const CartShow = () => {
  return (
    <div>
      <CartWrapper>
        <CartClose className="cartClose">X</CartClose>
        <CartTitle className="cartTitle">
          <h1>CART</h1>
        </CartTitle>

        <div className="cartItem">
          <div className="left">
            <div className="img">
              {/* <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ea23642dfe640579360af42012429db_9366/Harden_Travel_Hoodie_Black_IC0218_21_model.jpg"></img> */}
            </div>
            <div className="infor">
              <div className="name">Basic Cactus White T-shirt</div>
            </div>
          </div>

          <div className="right">
            <div className="close">X</div>
            <div className="price">$23,32</div>
            <input type=""></input>
          </div>
        </div>
      </CartWrapper>
    </div>
  );
};

export default CartShow;
