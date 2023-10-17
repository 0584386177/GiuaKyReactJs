import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  width: 300px;
  height: 450px;
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
  height: 300px;
  object-fit: cover;
`;
const ProductTitle = styled.h5`
  font-size: 17px;
  font-weight: 600;
`;
const ProductPrice = styled.p`
    font-size: 20px;
`
const Price = styled.span`
    font-weight: 600;
    font-size: 25px;
`
const ProductButton = styled.button`
    width: 100%;
    height: 40px;
    background: #23262E;
    color: white;
`;
const Product = () => {
  //destructering
  const {image,name,price}
  return (
    <ProductWrapper>
      <ProductItem className="product">
        <ProductImg
          src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aea8e1f0c15a4358a83fdf69aff64ac4_9366/adidas_Basketball_Tee_Grey_IN7566_21_model.jpg"
          alt=""
        />
        <ProductTitle>ADIDAS BASKETBALL TEE</ProductTitle>
        <hr width="30px" size="5" color="yellow"></hr>
        <ProductPrice>
           $<Price>10.90</Price>
        </ProductPrice>
        <ProductButton>Add to cart</ProductButton>
      </ProductItem>
    </ProductWrapper>
  );
};
export default Product;
