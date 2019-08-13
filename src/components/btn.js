import React, {PureComponent} from 'react';
import './scss.css'
class Btn extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.tagName)
        return (
                <button className={'button'}>{this.props.tagName}</button>
        );
    }
}

export default Btn;