import React from 'react';
import styled from "styled-components";

import { colors } from '@shared-constants/'


enum UnderlineTypes {
    Thick = "thick",
    Thin = "thin"
}

interface IUnderlineProps {
    type: UnderlineTypes,
    width?: string,
    color?: string,
}

interface StyledUnderlineProps {
    width?: string,
    color?: string,
}

const ThickUnderline = styled.span<StyledUnderlineProps>`
    background-color: ${({ color }) => color ? color : colors.primaryGreen};
    height: 2px;
    width: ${({ width }) => width ? width : "100px"};
`

const ThinUnderline = styled.span<StyledUnderlineProps>`
    background-color: ${ colors.primaryGreen };
    height: .2px;
    width: ${({ width }) => width ? width : "260px"};
    margin-left: 15px;
`

const underlineComponentMapping = {
    [UnderlineTypes.Thick]: ThickUnderline,
    [UnderlineTypes.Thin]: ThinUnderline,
};

const Underline : React.FC<IUnderlineProps> = ({ type, width, color }) => {

    const UnderlineComponent = underlineComponentMapping[type];

    return (
        <div className="row">
            <UnderlineComponent color={ color } width={ width } />
        </div>
    )
}

export { Underline, UnderlineTypes }