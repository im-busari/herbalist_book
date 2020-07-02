import React from 'react';

import { ProductsItem, Filter } from './'
import styled from 'styled-components';
import data from "../../../mock-data/productsData"


const ProductsListBody = styled.div`
    background-color: var(--light-grey);
    border-bottom: solid rgba(0, 0, 0, 0.2) 1px;
    padding: 1vh 10%;
    margin-top: 50px;
`


const ProductsList = () => {
    return (
        <ProductsListBody>

            <Filter />

            <div className="row justify-content-center mt-5">
                    { data.products.map(product => 
                    <ProductsItem
                        image={ product.image }
                        name={ product.name }
                        price={ product.price }
                        description={ product.description } />
                    )}
                </div>

        </ProductsListBody>
    )
}

export { ProductsList }