import React from 'react';
import styled from 'styled-components';
 const SizesWrapper = styled.div`
    width: 15%;
    height: 100vh;
    background-color: red;
`
const SizesTitle = styled.h3
const Sizes = () => {

    return (
        <SizesWrapper>
            <h3>Sizes</h3>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
        </SizesWrapper>
    );
};

export default Sizes;