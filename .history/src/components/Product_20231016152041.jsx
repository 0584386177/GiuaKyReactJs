import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  width: 200px;
  height: 250px;
  border: 2px solid black;
`;

const Product = () => {
  return (
    <ProductWrapper>
      <div className="product">
        <img src="https://source.unsplash.com/random" alt="" />
        <h5>Khanh Hoa</h5>
        <p>
          100000 <span>đ</span>
        </p>
        <button>Add to cart</button>
      </div>
    </ProductWrapper>
  );
};
export default Product;
