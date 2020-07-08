import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '@shared-constants/'
import { Text, TextTypes, Button, ButtonTypes } from '@shared-components/'
import { IProduct } from '../../../store/products/types'


const Body = styled.div`
    padding: 1vh 10%;
    margin-top: 50px;
    overflow-y: hidden; /* Hide vertical scrollbar */
    overflow-x: hidden;
    .changeAmountBtn { color: ${colors.black}; } ;
    .changeAmountBtn:hover { color: ${colors.primaryGreen}; }
`
const Price = styled.h5`
    font-size: 30px;
`

const ShowItem : React.FC<IProduct> = ({ image, name, price, description, _id, pricePerAmount }) => {
    
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        if (quantity <= 0) { 
            console.log("Please specify quantity.") 
        } else {
            console.log("Add to Cart")
        }
    }

    return (
        <Body className="row my-5">
            <img src={ image } className="col-lg-4 col-sm-12" alt="Lavander" />
            <div className=" m-3 col-lg-6 col-sm-12">
                <div className="row">
                    <Text className="mr-auto" type={TextTypes.Title} content={name} fontSize="30px" />
                    <Price>£ { price.toString().split(".")[0] }
                        <sup>{ (price % 1).toFixed(2).substring(2)}</sup></Price>
                </div>

                <br></br>
                <div className="row"><p> { description } </p></div>
                <div className="row">

                    <p className="font-weight-light font-italic my-auto">Quantity:</p>

                    <button type="button" className="btn mr-1" 
                    onClick={() => quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)}>
                        <i className="fas fa-minus fa-xs changeAmountBtn p-1"></i>
                    </button>
                    <h6 className="amountText my-auto"> { quantity }  </h6>
                    <button type="button" className="btn ml-1" onClick={() => setQuantity(quantity + 1)}>
                        <i className="fas fa-plus fa-xs changeAmountBtn p-1"></i>
                    </button>
                </div>
                <div className="row mt-3">
                    <p className="font-weight-light font-italic my-auto">* displayed price is for { pricePerAmount } </p>
                </div>
                <div className="row mt-5">
                    <Button type={ ButtonTypes.Success } content="Add to Cart" onClick={ addToCart }/>
                </div>
            </div>
        </Body>
    )
}


export { ShowItem } 