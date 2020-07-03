import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { ProductsItem, Filter } from './'


const ProductsListBody = styled.div`
    background-color: var(--light-grey);
    border-bottom: solid rgba(0, 0, 0, 0.2) 1px;
    padding: 1vh 10%;
    margin-top: 50px;
`
interface Product {
    _id: string;
    image: string;
    price: number;
    pricePerAmount: string;
    name: string;
    description: string;
}

const ProductsList = () => {

    const [products, setProduct ] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get("/api/products");
            setProduct(data);
        }
        fetchProducts()
        return () => {
            //
        }
    }, [ products ])

    return (
        <ProductsListBody>

            <Filter />

            <div className="row justify-content-center mt-5">
                    { products.length > 0 && products.map(product => 
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