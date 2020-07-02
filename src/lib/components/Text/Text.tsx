import React from 'react';
import styled from "styled-components";

import { colors } from '@shared-constants/'


enum TextTypes {
    Jumbotron = "jumbotron",
    Title = "title",
    Subtitle = "subtitle",
    Paragraph = "paragraph",
    Vertical = "vertical",
}


interface ITextProps {
    className?: string;
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
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ color }) => color ? color : colors.black};
    /* Color changes */
`

const SubtitleText = styled.div<StyledTextProps>`
    font-size: 25px;
    font-weight: 100px;
    color: ${ colors.black };
`

const ParagraphText = styled.div<StyledTextProps>`
    color: ${({ color }) => color ? color : colors.white};
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 1px;
`
const VerticalText = styled.div<StyledTextProps>`
    color: ${({ color }) => color ? color : colors.white};
    font-size: 60px;
    margin-left: 0px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    text-transform: uppercase;
    opacity: 0.2;
    font-weight: 600;
`

const textComponentMapping = {
    [TextTypes.Jumbotron]: JumbotronText,
    [TextTypes.Title]: TitleText,
    [TextTypes.Subtitle]: SubtitleText,
    [TextTypes.Paragraph]: ParagraphText,
    [TextTypes.Vertical]: VerticalText,
};

const Text : React.FC<ITextProps> = ({ content, type, color, className }) => {

    const TextComponent = textComponentMapping[type];

    return (
        <TextComponent color={ color } className={ className } >
            { content }
        </TextComponent>
    )
}
export { Text, TextTypes }
