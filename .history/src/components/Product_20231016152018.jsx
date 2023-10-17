import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  width: 200px;
  height: 100vh;
  border: 2px solid black;
`;
const
const Product = () => {
  return (
    <ProuctWrapper>
      <div className="product">
        <img src="https://source.unsplash.com/random" alt="" />
        <h5>Khanh Hoa</h5>
        <p>
          100000 <span>đ</span>
        </p>
        <button>Add to cart</button>
      </div>
    </ProuctWrapper>
  );
};
export default Product;
