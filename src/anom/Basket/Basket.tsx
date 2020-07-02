import React from 'react'
import styled from 'styled-components'
import { BasketList } from './components/BasketList'
import { Header, HeaderTypes } from 'src/layout'
import { CheckoutCard } from './components/CheckoutCard'


const BasketBody = styled.div`
    padding: 1vh 10%;
    margin-top: 50px;
`

const Basket = () => {

    return (
        <div>
            <Header type={ HeaderTypes.withoutHeaderImage } />

            <BasketBody>
                <div className="row">
                    <BasketList />  
                    <CheckoutCard checkoutPrice={ 100 } />
                </div>
            </BasketBody>


        </div>

    )
}



export { Basket }