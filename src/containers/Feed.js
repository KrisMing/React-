import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import './styles.css'
import Cards from './../components/Card';
class Feed extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ul className={'ulLeft'}>
                    {this.props.date.map((el,index) =>{
                        return <Cards date={el}></Cards>
                    })}
                </ul>
                <ul className={'ulRight'}>
                    {this.props.date.map((el,index) =>{
                        return <Cards date={el}></Cards>
                    })}
                </ul>
            </div>
        );
    }
}
const mapStateToprops = (state) =>{
    return {
        date:state.card
    }
}

export default connect(mapStateToprops)(Feed);