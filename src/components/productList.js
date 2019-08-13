import {PureComponent} from 'react'
import ProductEl from './productEl'
import React from 'react';
import add from '../action/add'
import store from './../store/store'
import {connect} from "react-redux";
class ProductList extends PureComponent {
    constructor(props) {
        super(props);
        this.addGood = this.addGood.bind(this);
    }
    addGood(index,title,price,account){
        if(this.props.good[index].account == 1) {
            let btn = document.getElementsByClassName('btn')[index];
            btn.disabled = true;
        }
        store.dispatch(add(index,title,price,account));
    }
    render() {
        return (
            <div>
                {
                    this.props.good.map((el, index) => {
                        return <ProductEl title={el.title} price={el.price} account={el.account} addGood={this.addGood.bind(this,index,el.title,el.price,el.account)}></ProductEl>
                    })
                }

            </div>
        )
    }
}
const mapStateToprops = (state) =>{
    return {
        good: state.good,
    }
}
export default connect(mapStateToprops)(ProductList);