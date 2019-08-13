import {PureComponent} from 'react'
import Product from './product'
import React from 'react';


class ProductEl extends PureComponent{
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }
    add(){
        this.props.addGood();
    }
    render() {
        const {title,price,account} = this.props
        return (
            <div className={'El'}>
                <Product title = {title} price = {price} account = {account}></Product>
                <button className={'btn'} onClick = {this.add}>Add to cart</button>
            </div>
        )
    }
}

export default ProductEl