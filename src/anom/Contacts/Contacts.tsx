import React from 'react';
import styled from 'styled-components';
import { colors } from '@shared-constants/';
import { Header, HeaderTypes } from '@layout/';

interface IContactsProps {
    phone: string,
    email: string,
    address: string,
}

const ContactsBody = styled.div`
    padding: 1vh 10%;
    margin-top: 200px;
    text-align: center;
    color: ${ colors.white };

    img {
        height: 60px;
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(294deg) brightness(109%) contrast(108%);
    }
`

const Contacts = () => {
    return (
        <Header type={HeaderTypes.withHeaderImage} image={'/wallpapers/Contacts.jpg'}>
            <ContactsBody>
                <div className="row">

                    {/* Phone  */}
                    <div className="col-md-4 col-sm-6">
                        <img src={"/icons/phone.svg"} alt="phone" />
                        <h5 className="mt-5">+44 1434 999990</h5>
                    </div>

                    {/* Email */}
                    <div className="col-md-4 col-sm-6">
                        <img src={"/icons/mail.svg"} alt="mail" />
                        <h5 className="mt-5">im.busari@gmail.com</h5>
                    </div>

                    {/* Location */}
                    <div className="col-md-4 col-sm-6">
                        <img src={"/icons/location.svg"} alt="location" />
                        <h5 className="mt-5">Cambridge, UK</h5>
                    </div>

                </div>
            </ContactsBody>
        </Header>
    )   
}

export { Contacts }
