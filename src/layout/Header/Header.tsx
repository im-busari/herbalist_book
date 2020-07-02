import React from 'react'
import styled from  'styled-components';

import { colors } from '@shared-constants/';
import { Navigation } from '../Navigation/Navigation';

enum HeaderTypes {
    withHeaderImage = "with-header-image",
    withoutHeaderImage = "without-header-image",
}

interface IHeaderProps {
    type: HeaderTypes,
    image?: string
    height?: string,
}

interface StyledHeaderProps {
    image?: string,
    height?: string,
}

const withHeaderImage = styled.div<StyledHeaderProps>`
    height: ${({ height }) => height ? height : "100vh" };
    min-height: 450px;
    background: ${({ image }) => image ? 
    `linear-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
    ), url(${image})` : colors.white };
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const withoutHeaderImage = styled.div<StyledHeaderProps>`
    height: auto;
    background: ${ colors.primaryGreen };
`


const headerComponentMapping = {
    [HeaderTypes.withHeaderImage]: withHeaderImage,
    [HeaderTypes.withoutHeaderImage]: withoutHeaderImage
};

const Header : React.FC<IHeaderProps> = ({ type, image, children, height }) => {

    const HeaderComponent = headerComponentMapping[type];
    

    return (
        <HeaderComponent image={ image } height={height}>
            <Navigation isTransperent={ type===HeaderTypes.withHeaderImage ? true : false } />
            
            { children }

        </HeaderComponent>
    )

}

export { Header, HeaderTypes }