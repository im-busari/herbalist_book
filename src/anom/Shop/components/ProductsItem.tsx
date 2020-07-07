import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Underline, UnderlineTypes, Button, ButtonTypes } from 'src/lib/components';
import { colors } from '@shared-constants/';

import { IProduct } from '../../../store/products/types'

const ProductCard = styled.div`
    background-color: ${ colors.white };
    height: 200px;
    width: 500px;

    img { height: 200px; }
    h5 { font-weight: 100px; }

    .card-text-wrapper {
        max-width: 400px;
    }
    .card-text {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
`


const ProductsItem : React.FC<IProduct> = ({ image, name, price, description, _id}) => {
    
    function btnHandler() {
        console.log("BTN CLICKED.")
    }


    return (
        <ProductCard className="shadow-sm m-3">
            <div className="row no-gutters">
                <div className="col-auto">
                    <img src={ image } className="img-fluid" alt="Lavander" />
                </div>
                <div className="col">
                    <div className="card-block px-2 mt-3 ml-4">
                        <div className="row mr-3">
                            <h5 className="mr-auto">{ name } </h5>
                            <h5>£{ price.toString().split(".")[0] }
                            <sup>{ (price % 1).toFixed(2).substring(2)}</sup></h5>
                        </div>
                        <div className="row">
                            <Underline type={ UnderlineTypes.Thin } />
                        </div>
                        <div className="row mt-3 mr-1 card-text-wrapper">
                            <p className="card-text"> { description } </p>
                        </div>
                        <div className="row mt-3 mr-3">
                            <Link to={`/shop/${ _id }/`} className="mx-auto"><Button content="Learn More" type={ ButtonTypes.Info } className="mr-auto" onClick={ btnHandler } /></Link>
                            <Link to="/" className="mx-auto"><Button content="Add to cart" type={ ButtonTypes.Success } className="mr-auto" onClick={ btnHandler } /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </ProductCard>
    )
}

export { ProductsItem }