import {PureComponent} from 'react'
import React from 'react';
import ProductList from './../components/productList'
import MyCart from './myCart'
import Products from './products'
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import AnimationExample from "./transitions";
import {DatePicker} from 'antd';
import Home from './Home'
import Detail from './Detail'
class App extends PureComponent{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Router>
                    <Route exact path={'/'} component={Home}></Route>
                    <Route path={'/detail'} component={Detail}></Route>
                </Router>
            </div>
        )
    }

}
export default App;