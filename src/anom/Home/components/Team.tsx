import React from 'react'
import styled from 'styled-components';

import { colors } from '@shared-constants/';
import { Text, TextTypes, Underline, UnderlineTypes, Member } from '@shared-components/';


interface ITeamProps {
    title: string,
}


const TeamBody = styled.div`
    padding: 1vh 10%;
    padding-top: 100px;
    vertical-align: middle;
    height: auto;
    min-height: 600px;
    background: ${colors.black};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .h-text-horizontal {
        display: none;
    };
    .h-underline {
        opacity: 0;
    };

    @media only screen and (max-width: 770px) {
        .h-text-vertical {
            display: none;
        }
        .h-text-horizontal {
            display: block;
        }
        .h-underline {
            opacity: 1;
        }
    }
`



const Team : React.FC<ITeamProps> = ({ title }) => {
    return(
        <TeamBody>

            {/* Horizontal Text */}
            <div className="row pt-5 h-text-horizontal">
                <Text content={ title } type={ TextTypes.Title } color={colors.white} />
            </div>
            <div className="h-underline"><Underline type={ UnderlineTypes.Thick } color={colors.white} /></div>


            <div className="row mt-5">

                    <div className="col-md-9 col-sm-12 text-white mt-2">
                        
                        {/* Team Members */}
                        <div className="row">
                            <Member image="/lady_rose.png" name="Immanuella Busari" role="Software Engineer" />
                            <Member image="/lady_shadow.png" name="Erza Scarlet" role="Marketing Expert" />
                            <Member image="/man_one.png" name="Uchiha Itachi" role="Magician" />
                        </div>
                    </div>

                    {/* Vertical Text */}
                    <div className="h-text-vertical col-2">
                        <Text content={ title } type={ TextTypes.Vertical } color={colors.white} />
                    </div>
                </div>
        </TeamBody>

    )
}


export { Team }
