import React from 'react';
import styled from "styled-components";

interface IMemberProps {
    image: string,
    name: string, 
    role: string,
    facebook?: string,
    twitter?: string,
    youtube?: string,
    linkedin?: string,
    instagram?: string,
    height?: string,
}

interface StyledMemberProps {
    height?: string
}

const MemberBody = styled.div<StyledMemberProps>`
    text-align: center;

    img {
        height: 170px;
    }
    @media only screen and (max-width: 800px) {
    img {
        height: 130px;
    }
}
`

// TO be Improved
const Member : React.FC<IMemberProps> = ({ image, name, role }) => {
    
    return (
        <MemberBody className="col-md-4 col-sm-4 col-xs-6 mt-md-5">
            <img className="mt-4" src={"/members/" + image} alt={name} />
            <p className="mt-3 text-center text-uppercase mx-2">{ name } </p>
        </MemberBody>
    )
}

export { Member }