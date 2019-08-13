import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../containers/styles.css'
class Cards extends PureComponent {
    render() {
        const {name,point,location,distance,image} = this.props.date;
        console.log(name,point,location,distance,image)
        return (
            <div>

                    <WhiteSpace size="lg" />
                    <Card className={'card'}>
                        <Card.Body style={{padding:0}}>
                            <div ><img className={'image'} src={[image]}/></div>
                        </Card.Body>
                        <Card.Header
                            title={name}
                        />
                        <Card.Footer content={location} extra={distance+'m'} />
                    </Card>
                    <WhiteSpace size="mg" />
            </div>
        );
    }
}


export default Cards;