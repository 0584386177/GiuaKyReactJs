import React from 'react';
import styled from 'styled-components';
const CartS = styled.div`
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
`;
const CartShow = () => {
    return (
        <div>
             <CartShow>
        <CartClose className="cartClose">
          X
        </CartClose>
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
      </CartShow>
        </div>
    );
};

export default CartShow;