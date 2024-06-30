import {combineReducers} from 'redux';
import cartReducer from './CartReducer';
const RootReducer=combineReducers({
    cart:cartReducer
})
export default RootReducer;