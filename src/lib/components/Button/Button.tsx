import React, { useState } from 'react';
import styled from "styled-components";

import { colors } from '@shared-constants/'

enum ButtonTypes {
    Primary = "primary",
    Secondary = "secondary",
    Info = "info",
    Search = "search",
    Success = "success",
}

interface StyledButtonProps {
    isHovering: boolean;
}

const PrimaryButton = styled.button<StyledButtonProps>`
    background-color: ${({ isHovering }) => isHovering ? colors.none : colors.primaryGreen};
    color: ${ colors.white };
    font-family: 'Arial';
    text-transform: capitalize;
    padding: 10px 30px;
    border-radius: 50px;
    border: solid 2px ${ colors.white };
    cursor: pointer;
    letter-spacing: 1px;
`;

const SecondaryButton = styled.button<StyledButtonProps>`
    background-color: ${({ isHovering }) => isHovering ? colors.none : colors.white};
    color: ${({ isHovering }) => isHovering ? colors.white : colors.black};
    font-family: 'Arial';
    text-transform: capitalize;
    padding: 10px 30px;
    border-radius: 50px;
    border: solid 2px ${ colors.white };
    cursor: pointer;
    letter-spacing: 1px;
`;

const InfoButton = styled.button<StyledButtonProps>`
    background-color: ${({ isHovering }) => isHovering ? colors.primaryBlue : colors.none};
    color: ${({ isHovering }) => isHovering ? colors.white : colors.primaryBlue};
    font-family: 'Arial';
    text-transform: capitalize;
    border-radius: 50px;
    border: solid 1px ${ colors.primaryBlue };
    cursor: pointer;
    padding: 5px 15px;
`;

const SuccessButton = styled.button<StyledButtonProps>`
    background-color: ${({ isHovering }) => isHovering ? colors.primaryGreen : colors.none};
    color: ${({ isHovering }) => isHovering ? colors.white : colors.primaryGreen};
    font-family: 'Arial';
    text-transform: capitalize;
    border-radius: 50px;
    border: solid 1px ${ colors.primaryGreen };
    cursor: pointer;
    padding: 5px 15px;
`;

const SearchButton = styled.button<StyledButtonProps>`
    align-content: right;
    background-color: ${({ isHovering }) => isHovering ? colors.primaryGreen : colors.white};
    color: ${({ isHovering }) => isHovering ? colors.white : colors.black};
    border-radius: 30px;
    border: 0;
    width: 100px;
    height: 35px;
    outline: 0;
`

const buttonComponentMapping = {
    [ButtonTypes.Primary]: PrimaryButton,
    [ButtonTypes.Secondary]: SecondaryButton,
    [ButtonTypes.Info]: InfoButton,
    [ButtonTypes.Success]: SuccessButton,
    [ButtonTypes.Search]: SearchButton
};

interface IButtonProps {
    className?: string;
    content: string;
    type: ButtonTypes; 
    onClick: () => void;
}

const Button : React.FC<IButtonProps> = ({ content, type, onClick, className }) => {
    const [selected, setSelected] = useState(false);

    const ButtonComponent = buttonComponentMapping[type];

    function handleClick() {
        onClick();
        setSelected(false);
    }

    function handleMouseEnter() {
        setSelected(true);
    }

    function handleMouseLeave() {
        setSelected(false);
    }

    return (
        <ButtonComponent className={ className }
            isHovering={selected}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            onClick={handleClick}
        >
            {content}
        </ButtonComponent>
    )
}

export { Button, ButtonTypes }