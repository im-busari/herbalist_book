import React from 'react';
import styled from "styled-components";

import { colors } from '@shared-constants/';


enum CardTypes {
    Small = "small",
    Medium = "medium",
    Large = "large"
}

interface ICardProps {
    content: string,
    type: CardTypes
}

const SmallCard = styled.div``
const MediumCard = styled.div``
const LargeCard = styled.div``


const cardComponentMapping = {
    [CardTypes.Small]: SmallCard,
    [CardTypes.Medium]: MediumCard,
    [CardTypes.Large]: LargeCard,
};

const Card : React.FC<ICardProps> = ({ content, type }) => {

    const CardComponent = cardComponentMapping[type];

    return (
        <CardComponent>
            { content }
        </CardComponent>
    )
}
export { Card, CardTypes }
