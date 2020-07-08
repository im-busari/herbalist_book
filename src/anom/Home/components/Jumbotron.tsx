import React from 'react';
import styled from 'styled-components';
import { colors } from '@shared-constants/';

import { Header, HeaderTypes } from '@layout/';
import { Button, ButtonTypes } from '@shared-components/';

interface IJumbotronProps {
    textTopWithBG: string,
    textTop: string,
    textBottomWithBG: string,
    textBottomBefore: string,
    textBottomAfter: string,
}

const JumbotronBody = styled.div`
    padding: 1vh 10%;

    .h-text {
        position: absolute;
        text-transform: uppercase;
        font-size: 3.5rem;
        color: white; 
    }

    .jumbotron-btn {
        position: absolute;
        bottom: 18vh;
        left: 10vw;
    }
`
const TextLeft = styled.h1`
    top: 20vh;
    left: 10vw;
`
const TextRight = styled.h1`
    bottom: 18vh;
    right: 10vw;
    text-align: right;
`
const TextBG = styled.span`
    height: 100px;
    background-color: ${ colors.white };
    color: ${ colors.black };
`


function onClickHandler() {
    console.log("clicked");
}

const Jumbotron : React.FC<IJumbotronProps> = ({ textTop, textBottomBefore, textTopWithBG, textBottomWithBG, textBottomAfter }) => {
    return (
        <Header type={HeaderTypes.withHeaderImage} image={'/wallpapers/Home.jpg'}>
            <JumbotronBody>

                <div className="row">
                    <TextLeft className="h-text"> 
                        <TextBG>{ textTopWithBG }</TextBG> { textTop }
                    </TextLeft>
                </div>

                <div className="row">
                    <div className="jumbotron-btn">
                        <Button type={ ButtonTypes.Secondary } content="Shop Now" onClick={ onClickHandler } />
                    </div>
                    
                    <TextRight className="h-text">
                        { textBottomBefore } <TextBG>{ textBottomWithBG }</TextBG> { textBottomAfter }
                    </TextRight>
                </div>

            </JumbotronBody>
        </Header>
    )   
}

export { Jumbotron }
