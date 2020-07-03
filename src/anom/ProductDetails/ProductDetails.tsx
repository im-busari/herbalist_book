import React from 'react';


const ProductDetails = (props: { match: { params: { id: any; }; }; }) => {

    return (
        <>
            { props.match.params.id }

        </>
    )
}

export default ProductDetails;
