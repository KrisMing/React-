import {PureComponent} from 'react'
import {connect} from 'react-redux'
import React from 'react';

class Product extends PureComponent{
    constructor(props) {
        super(props);
    }
    render(){
        const {title,price,account} = this.props;
        return (
            <div className={'product'}>
                {title} - {price} X {account}
            </div>
        )
    }
}

export default Product