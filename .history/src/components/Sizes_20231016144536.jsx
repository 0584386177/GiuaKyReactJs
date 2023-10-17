import React from 'react';
import styled from 'styled-components';
 const SizesWrapper = styled.div`
    width: 15%;
    height: 100vh;
    background-color: red;
`
const SizesTitle = styled.h3`
    font-weight: 500;
    font-size: 25px;
    padding: 10px 2px;
`
const SizesButton = styled.button
const Sizes = () => {

    return (
        <SizesWrapper>
            <SizesTitle>Sizes</SizesTitle>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
        </SizesWrapper>
    );
};

export default Sizes;