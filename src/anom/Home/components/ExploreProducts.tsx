import React from 'react'
import styled from 'styled-components';

import { colors } from '@shared-constants/';
import { Text, TextTypes, Button, ButtonTypes, Underline, UnderlineTypes } from '@shared-components/';


interface IExploreProductsProps {
    title: string,
    text: string,
    image?: string,
}

const ExploreProductsBody = styled.div`
    padding: 1vh 10%;
    margin-top: 50px;
    height: auto;
    min-height: 500px;
    background: linear-gradient(
        rgba(0, 0, 0, 0.0),
        rgba(0, 0, 0, 1)
    ), url('/wallpapers/soil_plant.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    p {
        margin-left: -15px;
        color: ${colors.white};
        margin-bottom: 70px;
    }
`

const ExploreProducts : React.FC<IExploreProductsProps> = ({ title, text }) => {
    
    function onClickHandler() {
        console.log("clicked");
    }
    
    return (
        <ExploreProductsBody>
            <div className="row mt-5">
                <Text content={ title } type={ TextTypes.Title } color={colors.white} />
            </div>
            <Underline type={ UnderlineTypes.Thick } color={ colors.white } />

            <div className="row mt-5">
                <div className="col-md-6 col-sm-12">
                    <p>
                        { text }
                    </p>
                    <Button type={ ButtonTypes.Secondary } content="Visit Shop" onClick={ onClickHandler } />
                </div>
            </div>
        </ExploreProductsBody>

    )
}

export { ExploreProducts }