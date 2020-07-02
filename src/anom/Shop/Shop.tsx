import React from 'react';
import { Header, HeaderTypes } from '@layout/';
import { Search, ProductsList } from './components/';


const Shop = () => {

    return (
        <>
            <Header type={HeaderTypes.withHeaderImage} image={'/wallpapers/Shop_BG.png'} height="60vh">
                <div className="row justify-content-center mt-5 pt-5">
                    <Search />
                </div>
            </Header>

            <ProductsList />

        </>
    )
}

export default Shop;
