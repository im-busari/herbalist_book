import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts, IState } from '../../../Store';
import axios from 'axios';

import styled from 'styled-components';

import { ProductsItem, Filter } from './'


const ProductsListBody = styled.div`
    background-color: var(--light-grey);
    border-bottom: solid rgba(0, 0, 0, 0.2) 1px;
    padding: 1vh 10%;
    margin-top: 50px;
`
interface IProduct {
    _id: string;
    image: string;
    price: number;
    pricePerAmount: string;
    name: string;
    description: string;
}


const ProductsList = () => {
    const productList = useSelector((state: IState) => state.productsList);
    const { loading, products, error } = productList;

    const dispatch = useDispatch();
    

//    const [products, setProduct ] = useState<Product[]>([]);

    useEffect(() => {
        dispatch(listProducts())
        // const fetchProducts = async () => {
        //     const { data } = await axios.get("/api/products");
        //     setProduct(data);
        // }
        // fetchProducts()
        return () => {
            //
        }
    }, [])

    return (
        <ProductsListBody>

            <Filter />

            <div className="row justify-content-center mt-5">
                    { products.length > 0 && products.map((product: IProduct) => 
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