import React from 'react'
import styled from 'styled-components';

import { Button, ButtonTypes } from '@shared-components/';


const SearchBody = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    border: solid 2px var(--white); 
    border-radius: 30px;
    padding: 3px 3px 3px 3px;

    input {
        background-color: transparent;
        outline: none;
        height: 35px;
        font-size: 15px;
        border: 0;
        width: 250px;
        margin-right: 30px;
        color: var(--white);
    }

    @media only screen and (max-width: 650px) {
        input {
            width: 170px;
        }
    }
    @media only screen and (max-width: 360px) {
        input {
            width: 140px;
        }
    }
`

const Search = () => {

    function onClickHandler() {
        console.log("clicked");
    }

    return (
        <SearchBody className="mt-5 mx-4">
            <input type="text" className="col-8" placeholder="Type product's name..."/>
            <Button type={ ButtonTypes.Search } content="Search" onClick={ onClickHandler } />
        </SearchBody>
    )
}

export { Search }