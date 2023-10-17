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
`;
const CartSymbol = styled.button`
  font-size: 25px;
  color: white;
`;
const CartShow = styled.div``;
const handleOpenCart = () => {};
const Cart = () => {
  return (
    <CartWrapper>
      <CartSymbol onClick={handleOpenCart}>
        <i class="fa-solid fa-cart-shopping"></i>
      </CartSymbol>

      <CartShow>
        <div className="cartClose"></div>
        <div className="cartTitle"></div>

        <div className="cartItem">
          <div className="left">
            <div className="img">
              <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ea23642dfe640579360af42012429db_9366/Harden_Travel_Hoodie_Black_IC0218_21_model.jpg"></img>
            </div>
            <div className="infor">
                <div className="name">Basic Cactus White T-shirt</div>
            </div>
          </div>

          <div className="right">
            <div className="close">X</div>
            <div className="price">$23,32</div>
            <input type="reset"></input>
          </div>
        </div>
      </CartShow>
    </CartWrapper>
  );
};

export default Cart;
