import React from 'react';
import styled from 'styled-components';
 const SizesWrapper = styled.div`
    width: 15%;
    height: 100vh;
    background-color: red;
`
const Sizes = () => {

    return (
        <SizesWrapper>
            
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
        </SizesWrapper>
    );
};

export default Sizes;