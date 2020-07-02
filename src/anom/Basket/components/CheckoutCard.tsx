import React from 'react';
import { Button, ButtonTypes } from '@shared-components/'; 

interface ICheckoutCardProps {
    checkoutPrice: number,
}


const CheckoutCard : React.FC<ICheckoutCardProps> = ({ checkoutPrice }) => {

    function checkoutHandler() {
        console.log("Checkout")
    }

    return (
        <div className="col-md-5 col-sm-12 mt-5 ml-md-1">
            <div className="shadow-sm px-3 pb-3 bg-white">
                <div className="row p-4 mt-5">
                    <h5 className="mr-auto">Total: </h5>
                    <h5>£100</h5>
                </div>
                <div className="row my-2 mx-auto">
                    <Button type={ ButtonTypes.Success } content="Proceed to checkout" className="mx-auto px-5" onClick={ checkoutHandler } />
                </div>
            </div>
        </div>
    )
}

export { CheckoutCard }