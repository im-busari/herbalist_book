import React from 'react'
import styled from 'styled-components';

import { colors } from '@shared-constants/';

import { Text, TextTypes, RoundImage, RoundImageTypes, Underline, UnderlineTypes } from '@shared-components/';


interface IMissionProps {
    title: string,
}

const MissionBody = styled.div`
    padding: 1vh 10%;
    margin-top: 50px;
`

const MissionLogo = styled.img`
    height: 250px;
`

const Mission : React.FC<IMissionProps> = ({ title }) => {
    return (
        <MissionBody>
            <div className="row mt-5">
                <Text content={ title } type={ TextTypes.Title } color={colors.black} />
            </div>
            <Underline type={ UnderlineTypes.Thick } />

            <div className="row mt-5 pt-4">
                <div className="col-2">
                    <MissionLogo className="mission-logo" src={"/hb_logo_vertical.svg"} alt="Herbalist Book" />
                </div>
                
                <div className="col-5">
                    <RoundImage 
                        type={ RoundImageTypes.Service } 
                        text="Connecting with certified producers and herb specialists." 
                        image={"/icons/plant.svg"} />
                </div>
                <div className="col-5">
                    <RoundImage 
                        type={ RoundImageTypes.Service } 
                        color={ colors.primaryYellow }
                        text="Helping customers to try the NATURE's WAY lifestyle." 
                        image={"/icons/customer.svg"} />
                </div>
            </div>
        </MissionBody>
    )
}   

export { Mission }