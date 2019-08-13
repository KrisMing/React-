import React, {PureComponent} from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import {BrowserRouter as Router,Route,NavLink} from "react-router-dom";
import Detail from "./Detail";
import Lo1 from '../components/1';
import Lo2 from '../components/2';
import Lo3 from '../components/3';
import Tag from './../components/tag'
import Tags from './Tags'
import './styles.css'
import Cards from '../components/Card'
import AJAX from './Fetch'
import Feed from './Feed'
class Home extends PureComponent {
    render() {
        return (
            <div>
                <WingBlank size="sg">
                        <h3>探索发现</h3>
                    <div><Tag></Tag></div>
                    <div style={{width:'414px'}}>
                        <Feed></Feed>
                        <AJAX></AJAX>
                    </div>
                </WingBlank >

            </div>
        );
    }
}

export default Home;