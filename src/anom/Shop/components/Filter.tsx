import React from 'react'
import styled from 'styled-components';

const FilterBody = styled.div`
    margin-top: 50px;
    padding-bottom: 80px;
    border-bottom: solid rgba(0, 0, 0, 0.1) 1px;
`

const Filter = () => {
    return (
        <FilterBody className="row">

            <div className="mr-auto ml-5 w-50">
                <div className="form-group">
                    <input type="range" className="custom-range mt-2" min="0" max="120" step="1" id="priceRange"/>
                </div>
            </div>

            <div className="form-group mr-5">
                <select className="form-control" id="sortBy">
                    <option>Recommended</option>
                    <option>Customer Rating</option>
                    <option>Price per Item: Low - High</option>
                    <option>Price per Item: High - Low</option>
                </select>
            </div>
        </FilterBody>
    )
}

export { Filter }