import React from 'react';
import ReactDOM from 'react-dom';
import Products from './containers/products';
import './index.css';
import store from './store/store'
import {Provider} from 'react-redux';
import App from './containers/App'
import Tags from './containers/Tags'
import Cards from './components/Card'
import {WingBlank} from "antd-mobile";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);
