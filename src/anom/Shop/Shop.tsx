import * as React from 'react';
import { connect } from 'react-redux'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'

import ShopIndexPage from './main'

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
        </Switch>
    )
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ products }: ApplicationState) => ({
    loading: products.loading,
    errors: products.errors,
    data: products.data
})

export default connect(mapStateToProps)(ShopPage)
