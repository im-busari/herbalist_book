import * as React from 'react';
import { Header, HeaderTypes } from '@layout/';
import { Search } from './components/';
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

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch


const ProductsListBody = styled.div`
    background-color: var(--light-grey);
    border-bottom: solid rgba(0, 0, 0, 0.2) 1px;
    padding: 1vh 10%;
    margin-top: 50px;
`


class ShopIndexPage extends React.Component<AllProps> {
    public componentDidMount() {
        const { fetchRequest: fr } = this.props
        fr()
    }

    public render() {
        const { loading, data } = this.props

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
                                key={ product._id }
                                image={ product.image }
                                name={ product.name }
                                price={ product.price }
                                description={ product.description } />
                            )}
                        </div>

                </ProductsListBody>
    
            </>
        )
    }
}

const mapStateToProps = ({ products }: ApplicationState) => ({
    loading: products.loading,
    errors: products.errors,
    data: products.data
  })
  
  // mapDispatchToProps is especially useful for constraining our actions to the connected component.
  // You can access these via `this.props`.
  const mapDispatchToProps = {
    fetchRequest
  }
  
  // Now let's connect our component!
  // With redux v4's improved typings, we can finally omit generics here.
export default connect(
mapStateToProps,
mapDispatchToProps)(ShopIndexPage)
