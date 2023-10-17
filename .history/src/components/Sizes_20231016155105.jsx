import React from 'react';
import styled from 'styled-components';
 const SizesWrapper = styled.div`
    width: 15%;
    height: 100vh;

`
const SizesTitle = styled.h3`
    font-weight: 500;
    font-size: 25px;
    padding: 10px 2px;
`
const SizesButton = styled.button`
    padding: 8px;
    margin: 5px;
    background: #eee;
    border-radius: 100rem;
    transition: all 0.2s linear;
    font-weight: 600;
    font-size: 15px;

    &&:hover{
        background-color: #BBBCBC;
    }
`

const Sizes = () => {

    return (
        <SizesWrapper>
            <SizesTitle>Sizes</SizesTitle>
            <SizesButton>M</SizesButton>
            <SizesButton>L</SizesButton>
            <SizesButton>XL</SizesButton>
            <SizesButton>XXL</SizesButton>
        </SizesWrapper>
    );
};

export default Sizes;