import React from 'react';
import { BasketItem } from './BaskteItem';
import { Underline, UnderlineTypes } from '@shared-components/';
import data from "../../../mock-data/productsData"

interface IBasketListProps {

}

const BasketList : React.FC<IBasketListProps> = () => {

    return (
        <div className="col-md-6 col-sm-12">
            <div className="row">
                <h3 className="h-basket">My Basket</h3>
            </div>
            <div className="row mb-4">
                <Underline type={ UnderlineTypes.Thin } />
            </div>

            <div className="row">
                { data.products.map(({ image, name, price, pricePerAmount, _id }) => 
                    <BasketItem 
                        key={_id}
                        image={ image }
                        name={ name }
                        price={ price }
                        pricePerAmount={ pricePerAmount } />
                )}
            </div>
            
        </div>
    )
}

export { BasketList }