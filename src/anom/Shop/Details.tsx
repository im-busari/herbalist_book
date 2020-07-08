import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import { ApplicationState } from '@store/'
import { IProduct } from '../../store/products/types'
import { fetchRequest } from '../../store/products/actions'

import { Header, HeaderTypes } from '@layout/'
import { ShowItem } from './components/ShowItem'


// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
    loading: boolean
    data: IProduct[]
    errors?: string
}
interface PropsFromDispatch {
    fetchProducts: typeof fetchRequest
}

interface RouteParams {
    name: string
}

interface State {
    selected?: IProduct
}

type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps<RouteParams> & State

const ProductDetails : React.FC<AllProps> = ({ data, fetchProducts, loading, match }) => {

    useEffect(() => {
        if (!data || data.length === 0) {
            fetchProducts()
        }
    }, [fetchProducts, data])

        const selected = data.find(product => product.name === match.params.name)
    
        return (
            <>
            <Header type={HeaderTypes.withoutHeaderImage}></Header>
            <div className="row">
                { loading && "Loading selected data...." }
                { selected && 
                <div>
                    <ShowItem
                    _id={ selected._id }
                    image={ selected.image }
                    name={selected.name }
                    description={ selected.description }
                    price={ selected.price }
                    pricePerAmount= { selected.pricePerAmount} />
                </div>}
            </div>
            </>
        )
    
}


const mapStateToProps = ({ productsList }: ApplicationState) => ({
    loading: productsList.loading,
    errors: productsList.errors,
    data: productsList.data
})

const mapDispatchToProps = {
    fetchProducts: fetchRequest
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps)(ProductDetails)
