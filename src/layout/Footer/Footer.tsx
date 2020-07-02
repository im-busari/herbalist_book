import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '@shared-constants/';

const FooterBody = styled.div`
    width: 100vw;
    height: auto;
    background-color: ${ colors.lightGrey };
    padding: 1vh 10%;

    img {
        height: 60px;
    }

    @media screen and (max-width: 768px) {
        a {
            text-align: center;
        }
    }
`
const FooterCopyright = styled.p`
    text-align: right;
    @media screen and (max-width: 768px) {
        margin-top: 25px;
        text-align: center;
    }
` 

const Footer  = () => {

    const FooterComponent = FooterBody;

    return (
        <FooterComponent>
            <div className="row py-4">
                <Link to="/" className="logo-footer col-md-3 col-sm-12">
                    <img src={"/hb_black.svg"} alt="Herbalist Book"/>
                </Link>
                <FooterCopyright className="col-md-9 col-sm-12">Copyright © 2020 Immanuella Busari<br></br>All Rights Reserved</FooterCopyright>
            </div>
        </FooterComponent>
    )
}


export { Footer }