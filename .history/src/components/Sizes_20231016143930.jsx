import React from 'react';
import styled from 'styled-components';
SizesWrapper = styled.div`
    width: 15%;
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