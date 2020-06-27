import React, { useState } from 'react';
import styled from "styled-components";

import { colors } from '@shared-constants/'


enum TextTypes {
    Jumbotron = "jumbotron",
    Title = "title",
    Subtitle = "subtitle",
    Paragraph = "paragraph"
}


interface ITextProps {
    content: string; 
    type: TextTypes;
    fontSize?: string;
    color?: string;
}

interface StyledTextProps {
    fontSize?: string;
    color?: string;
}

const JumbotronText = styled.div<StyledTextProps>`
    font-size: 56px;
    color: ${({ color }) => color ? color : colors.white};
    text-transform: uppercase;
    /* Think about positioning */
`

const TitleText = styled.div<StyledTextProps>`
    font-size: 40px;
    color: ${({ color }) => color ? color : colors.white};
    /* Color changes */
`

const SubtitleText = styled.div<StyledTextProps>`
    font-size: 30px;
    color: ${({ color }) => color ? color : colors.white};
    font-style: italic;
`

const ParagraphText = styled.div<StyledTextProps>`
    color: ${({ color }) => color ? color : colors.white};
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 1px;

`
const textComponentMapping = {
    [TextTypes.Jumbotron]: JumbotronText,
    [TextTypes.Title]: TitleText,
    [TextTypes.Subtitle]: SubtitleText,
    [TextTypes.Paragraph]: ParagraphText,
};

const Text : React.FC<ITextProps> = ({ content, type, color }) => {

    const TextComponent = textComponentMapping[type];

    return (
        <TextComponent color={ color }>
            { type === TextTypes.Subtitle && content }
        </TextComponent>
    )
}
export { Text, TextTypes }
