import React from 'react';
import { ApplicationState } from '../../store/index'

const ProductDetails = (props: { match: { params: { id: any; }; }; }) => {

    return (
        <>
            { props.match.params.id }

        </>
    )
}

export default ProductDetails;
