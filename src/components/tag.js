import React, {PureComponent} from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import 'antd/dist/antd.css';
import {BrowserRouter as Router,Route,NavLink} from "react-router-dom";
import Lo1 from './1';
import Lo2 from './2';
import Lo3 from './3';
import Tags from './../containers/Tags'
class Tag extends PureComponent {
    constructor(props) {
        super(props);
    }
 render() {
     const tabs = [
         { title: <NavLink to={'/'}>附近</NavLink>, sub: '1' },
         { title: <NavLink to={'/lo2'}>全城市</NavLink>, sub: '2' },
         { title: <NavLink to={'/lo3'}>回龙观</NavLink>, sub: '3' },
     ];
        return (
            <div style={
                {

                }
            }>
                <Router>
                <Tabs prefixCls={{
                    height: 20
                }
                }
                    tabs={tabs}
                >
                </Tabs>
                    <Route exact path={'/'} component={Tags}></Route>
                    <Route path={'/lo2'} component={Lo2}></Route>
                    <Route path={'/lo3'} component={Lo3}></Route>
                </Router>

            </div>
        );
    }
}

export default Tag;