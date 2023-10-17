import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  width: 220px;
  height: 350px;
  border: 2px solid black;
`;

const ProductItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const ProductTitle = styled.h5`
  font-size: 17px;
  font-weight: 600;
`;
const Product = () => {
  return (
    <ProductWrapper>
      <ProductItem className="product">
        <ProductImg
          src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aea8e1f0c15a4358a83fdf69aff64ac4_9366/adidas_Basketball_Tee_Grey_IN7566_21_model.jpg"
          alt=""
        />
        <ProductTitle>ADIDAS BASKETBALL TEE</ProductTitle>
        <hr width="50px" size="1"></hr>
        <p>
          100000 <span>đ</span>
        </p>
        <button>Add to cart</button>
      </ProductItem>
    </ProductWrapper>
  );
};
export default Product;
