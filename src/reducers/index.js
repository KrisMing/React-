import {combineReducers} from "redux";
import good from './good';
import cart from './cart'
import amount from './amount'
const reducer = combineReducers({
    good,
    cart,
    amount
})
export default reducer