import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  width: 200px;
  height: 350px;
  border: 2px solid black;
`;

const ProductItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
`;

const ProductImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`
const ProductTitle = = styled.h5`
    font-size: 20px;
`
const Product = () => {
  return (
    <ProductWrapper>
      <ProductItem className="product">
        <ProductImg src="https://source.unsplash.com/random" alt="" />
        <ProductTitle>ADIDAS BASKETBALL TEE</ProductTitle>
        <p>
          100000 <span>đ</span>
        </p>
        <button>Add to cart</button>
      </ProductItem>
    </ProductWrapper>
  );
};
export default Product;
