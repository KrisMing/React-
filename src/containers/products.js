import {PureComponent} from 'react'
import React from 'react';
import ProductList from './../components/productList'
class Products extends PureComponent{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ProductList>
                </ProductList>
            </div>
        )
    }

}
export default Products;