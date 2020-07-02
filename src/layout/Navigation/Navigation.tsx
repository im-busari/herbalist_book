import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { colors } from '@shared-constants/' 
import styled from 'styled-components'
import { Button, ButtonTypes } from 'src/lib/components';


interface INavProps {
    isTransperent?: boolean;
}

interface StyledNavProps {
    isTransperent?: boolean;
    isActive?: boolean;
    isHovering?: boolean;
}

const MainNavigation = styled.div<StyledNavProps>`
    background-color: ${({ isTransperent }) => isTransperent ? colors.none : colors.primaryGreen};
    color: ${ colors.white };
    vertical-align: middle;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1vh 10%;
    position: relative;
`;

const NavList = styled.ul`
    margin-top: 10px;
    list-style: none;
    text-transform: uppercase;
    display: flex;

    @media only screen and (max-width: 1000px) {
        display: none;
    }

    li {
        padding: 0px 10px;
    }

    li a {
        transition: all 0.3s ease 0s;
        padding: 20px 20px;
        text-decoration: none;
        color: ${ colors.white };
    }
`
const NavRight = styled.div`
    margin-right: auto;
`
const NavLogo = styled.img`
    height: 50px;
`



// Mobile Navigation

const NavButton = styled.div`
    display: none;

    @media only screen and (max-width: 1000px) {
        display: initial;
    }
`

const NavSidebar = styled.div<StyledNavProps>`
    height: 100%;
    width: ${({ isActive }) => isActive ? 100 : 0 }%;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: ${ colors.lightGrey };
    overflow-x: hidden;
    transition: all 0.5s ease 0s;
`

const NavSidebarContent = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        padding: 15px;
        font-size: 36px;
        display: block;
        transition: all 0.3s ease 0s;
        color: ${ colors.black };
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: ${colors.primaryGreen}
        }
        
        @media screen and (max-height: 450px) {
            font-size: 20px;
        }
    }
`

// const NavSidebarItem = styled.a<StyledNavProps>`
//     padding: 15px;
//     font-size: 36px;
//     display: block;
//     transition: all 0.3s ease 0s;
//     color: ${ colors.black };
//     cursor: pointer;

//     @media screen and (max-height: 450px) {
//         font-size: 20px;
//     }
// `

const NavSidebarClose = styled.a`
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
    color: ${ colors.black };
    cursor: pointer;

    @media screen and (max-height: 450px) {
        font-size: 40px;
        top: 15px;
        right: 35px;
    }
`


const Navigation : React.FC<INavProps> = ({ isTransperent }) => {
    
    const [sidebar, setSidebar] = useState(false)
    // const [hover, setHover] = useState(false)

    const NavigationComponent = MainNavigation;

    function showSidebar() {
        setSidebar(true)
    }

    function hideSidebar() {
        setSidebar(false)
    }

    //  Changing the NavItem's color on hover
    // function handleMouseEnter() {
    //     setHover(true)
    // }
    // function handleMouseLeave() {
    //     setHover(false)
    // }

    return (
        <>
        {/* Full width menu */}
        <NavigationComponent isTransperent={ isTransperent }>
            
                <NavRight> <NavLogo src={"/hb_logo.svg"} alt="Herbalist Book" /> </NavRight>
                

                <div>
                    <NavList>
                        <li><Link to="/"> Home </Link></li>
                        <li><Link to="/shop"> Shop </Link></li>
                        <li><Link to="/contacts"> Contacts </Link></li>
                        <li><Link to="/basket/:id?"> Basket </Link></li>
                        <li><Link to="/account"> Account </Link></li>
                    </NavList>
                </div>

                <NavButton>
                    <Button content="Menu" type={ ButtonTypes.Primary } onClick={showSidebar} />
                </NavButton>
        </NavigationComponent>

        {/* Sidebar (Mobile) Menu (width > 1000px) */}
        <NavSidebar isActive={ sidebar }>
            <NavSidebarClose onClick={hideSidebar} > &times; </NavSidebarClose>
            <NavSidebarContent>

                <Link to="/" onClick={hideSidebar}> Home </Link>
                <Link to="/shop" onClick={hideSidebar}> Shop </Link>
                <Link to="/contacts"> Contacts </Link>
                <Link to="/basket/:id?"> Basket </Link>
                <Link to="/account"> Account </Link>

            </NavSidebarContent>
        </NavSidebar>
        </>
    )



}

export { Navigation }