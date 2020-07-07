import * as React from 'react';
import { connect } from 'react-redux'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'

import ShopIndexPage from './Shop'

import { ApplicationState } from '../../store/index'
import { IProduct } from '../../store/products/types'

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
    loading: boolean
    data: IProduct[]
    errors?: string
}

type AllProps = PropsFromState & RouteComponentProps

const ShopPage: React.FC<AllProps> = ({ match }) => {

    return (
        <Switch>
            <Route exact path={`${match.path}/`} component={ShopIndexPage} />
            {/* <Route path={`${match.path}/:id`} component={ShopIndexPage} /> */}
        </Switch>
    )
}

// Include one context at a time in a connected component (unless it's necessary to do otherwise)
const mapStateToProps = ({ productsList }: ApplicationState) => ({
    loading: productsList.loading,
    errors: productsList.errors,
    data: productsList.data
})

export default connect(mapStateToProps)(ShopPage)
