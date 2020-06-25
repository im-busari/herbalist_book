import React, { useState } from 'react';
import styled from "styled-components";

import { colors } from '../../constants'

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
`;

const buttonComponentMapping = {
    [ButtonTypes.Primary]: PrimaryButton,
    [ButtonTypes.Secondary]: PrimaryButton,
    [ButtonTypes.Custom]: PrimaryButton
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