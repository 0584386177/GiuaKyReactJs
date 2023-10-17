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
`;
const Product = () => {
  return (
    <ProductWrapper>
      <ProductItem className="product">
        <img src="https://source.unsplash.com/random" alt="" />
        <h5>Khanh Hoa</h5>
        <p>
          100000 <span>đ</span>
        </p>
        <button>Add to cart</button>
      </ProductItem>
    </ProductWrapper>
  );
};
export default Product;
