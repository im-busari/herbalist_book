import React, { useState } from 'react';
import styled from "styled-components";

import { colors } from '@shared-constants/'

enum ButtonTypes {
    Primary = "primary",
    Secondary = "secondary",
    Custom = "custom"
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

const CustomButton = styled.button<StyledButtonProps>`
    background-color: ${({ isHovering }) => isHovering ? colors.primaryBlue : colors.none};
    color: ${({ isHovering }) => isHovering ? colors.white : colors.primaryBlue};
    font-family: 'Arial';
    text-transform: capitalize;
    padding: 10px 30px;
    border-radius: 50px;
    border: solid 2px ${ colors.primaryBlue };
    cursor: pointer;
    letter-spacing: 1px;
`;

const buttonComponentMapping = {
    [ButtonTypes.Primary]: PrimaryButton,
    [ButtonTypes.Secondary]: SecondaryButton,
    [ButtonTypes.Custom]: CustomButton
};

interface IButtonProps {
    content: string; /* The text inside the Button */
    type: ButtonTypes; /* The type of Button pulled from the Enum ButtonTypes */
    onClick: () => void; /* The function to execute once the button is clicked */
}

const Button : React.FC<IButtonProps> = ({ content, type, onClick }) => {
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
        <ButtonComponent 
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