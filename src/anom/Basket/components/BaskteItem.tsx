import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '@shared-constants/';
import { IProduct } from '../../../store/products/types'

const BasketItemCard = styled.div`
    background-color: ${ colors.white };
    height: 150px;
    width: 400px;

    img { height: 150px; };
    h5 { font-weight: 100px; };
    .changeAmountBtn { color: ${colors.black}; } ;
    .changeAmountBtn:hover { color: ${colors.primaryGreen}; }
`

const BasketItem : React.FC<IProduct> = ({ _id, image, name, price, pricePerAmount }) => {
    
    const [quantity, setQuantity] = useState(1);

    return (
        <BasketItemCard className="shadow-sm mt-3" key={ _id }>
            <div className="row no-gutters">
                <div className="col-auto">
                    <img src={ image } className="img-fluid" alt={ name } />
                </div>
                <div className="col">
                    <div className="card-block px-2 mt-3 ml-4">
                        <div className="row mr-3">
                            <h5 className="mr-auto">{ name }</h5>
                            <h5>£{ (price * quantity).toFixed(2) }</h5>
                        </div>
                        <div className="row mr-1 card-text-wrapper">
                            <p className="font-weight-light font-italic"> { pricePerAmount } </p>
                        </div>
                        <div className="row mr-3">
                            <div className="row mr-auto">
                                <p className="font-weight-light font-italic ml-3 my-auto">Quantity:</p>
                            </div>
                            <div className="row">
                                <button type="button" className="btn mr-1" 
                                onClick={() => quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)}>
                                    <i className="fas fa-minus fa-xs changeAmountBtn p-1"></i>
                                </button>
                                <h6 className="amountText my-auto"> { quantity }  </h6>
                                <button type="button" className="btn ml-1" onClick={() => setQuantity(quantity + 1)}>
                                    <i className="fas fa-plus fa-xs changeAmountBtn p-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BasketItemCard>
    )
}

export { BasketItem }