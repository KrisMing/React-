import React, {PureComponent} from 'react';
import Btn from './../components/btn'
import {connect} from "react-redux";
import store from './../store/store'
class Tags extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.tagName)
        return (
            <div className={'tags'}>
                {
                    this.props.tagName.map((el,index) => {
                        return <Btn tagName={el}></Btn>
                    })
                }
            </div>
        );
    }
}
const mapStateToprops = (state)=>{
    return{
        tagName: state.tagName
    }
}
export default connect(mapStateToprops)(Tags);
