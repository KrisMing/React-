import {PureComponent} from 'react'
import React from 'react';
import ProductList from './../components/productList'
import {connect} from "react-redux";
import Product from "./../components/product";
import store from './../store/store'
import del from './../action/del'

class MyCart extends PureComponent{
    constructor(props) {
        super(props);
        this.del = this.del.bind(this);
    }
    del(){
        store.dispatch(del());
    }
    render() {
        let length = this.props.cart.length;
        if(length == 0){
            return(
            <div>
                <div>请挑选货物</div>
                <div>总金额{this.props.amount}</div>
            </div>
            )
        }
        console.log(this.props)
        return(
                <div>
                    {
                        this.props.cart.map((el,index) =>{
                            return <Product title={el.title} price={el.price} account={el.account}></Product>
                        })
                    }
                    <div>总金额{this.props.amount}</div>
                    <button onClick={this.del}>清空购物车</button>
                </div>

        )

    }
}
const mapStateToprops = (state) =>{
    console.log(state);
    return {
        cart: state.cart,
        amount: state.amount
    }
}
export default connect(mapStateToprops)(MyCart);
