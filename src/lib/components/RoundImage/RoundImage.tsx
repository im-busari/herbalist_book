import React from 'react'
import styled from 'styled-components';

import { colors } from '@shared-constants/';

enum RoundImageTypes {
    Service = "service",
    Member = "member"
}

interface IRoundImageProps {
    type: RoundImageTypes,
    image: string,
    borderWidth?: string,
    text?: string,
    color?: string
}

interface StyledRoundImageProps {
    borderWidth?: string,
    text?: string,
    color?: string
}


const ServiceRoundImage = styled.div<StyledRoundImageProps>`
    text-align: center;
    vertical-align: bottom;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: solid ${({ borderWidth }) => borderWidth ? borderWidth : "5px"} ${({ color }) => color ? color : colors.primaryGreen};

    img {
        height: 90px;
    }
`

//  Member to be changed
const MemberRoundImage = styled.div<StyledRoundImageProps>`
    text-align: center;
    vertical-align: bottom;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: solid ${({ borderWidth }) => borderWidth ? borderWidth : "2px"} ${({ color }) => color ? color : colors.primaryGreen};
`

const roundImageComponentMapping = {
    [RoundImageTypes.Service]: ServiceRoundImage,
    [RoundImageTypes.Member]: MemberRoundImage,
};

const RoundImage : React.FC<IRoundImageProps> = ({ type, image, borderWidth, text, color }) => {
    
    const RoundImageComponent = roundImageComponentMapping[type]
    
    return (
        <>
            <RoundImageComponent className="mx-auto" color={ color } borderWidth={ borderWidth }>
                <img className="mt-4" src={image} alt="Producers" />
            </RoundImageComponent>
            <p className="mt-3 text-center mx-5"> { text } </p>
        </>
    )
}

export { RoundImage, RoundImageTypes }