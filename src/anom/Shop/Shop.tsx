import React, { useEffect } from 'react';
import { Header, HeaderTypes } from '@layout/';
import { Search } from './components';
import { ProductsItem, Filter } from './components'
import styled from 'styled-components';

//  Added
//  import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { ApplicationState } from '../../store/index'
import { IProduct } from '../../store/products/types'
import { fetchRequest } from '../../store/products/actions'


interface PropsFromState {
    loading: boolean
    data: IProduct[]
    errors?: string
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
    fetchRequest: typeof fetchRequest
}

// Combine both state + dispatch props - in a union type
type AllProps = PropsFromState & PropsFromDispatch


const ProductsListBody = styled.div`
    background-color: var(--light-grey);
    border-bottom: solid rgba(0, 0, 0, 0.2) 1px;
    padding: 1vh 10%;
    margin-top: 50px;
`


const ShopIndexPage : React.FC<AllProps> = ({ loading, data, fetchRequest }) => {

    useEffect(() => {
        fetchRequest();
    }, [fetchRequest]);

    return (
        <>
            <Header type={HeaderTypes.withHeaderImage} image={'/wallpapers/Shop_BG.png'} height="60vh">
                <div className="row justify-content-center mt-5 pt-5">
                    <Search />
                </div>
            </Header>

            <ProductsListBody>

                <Filter />
                {loading && data.length === 0 && (
                    <h1>I am loading </h1>
                )}

                <div className="row justify-content-center mt-5">
                        { data.map(product => 
                        <ProductsItem
                            _id={ product._id }
                            image={ product.image }
                            name={ product.name }
                            price={ product.price }
                            pricePerAmount = { product.pricePerAmount }
                            description={ product.description } />
                        )}
                    </div>

            </ProductsListBody>

        </>
    )
}

const mapStateToProps = ({ productsList }: ApplicationState) => ({
    loading: productsList.loading,
    errors: productsList.errors,
    data: productsList.data
  })
  
  // mapDispatchToProps for constraining our actions to the connected component.
  const mapDispatchToProps = {
    fetchRequest
  }
  
  // connecting your component!
export default connect(
mapStateToProps,
mapDispatchToProps)(ShopIndexPage)
