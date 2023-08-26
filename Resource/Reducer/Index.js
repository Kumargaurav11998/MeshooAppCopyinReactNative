import {combineReducers} from 'redux';
import {CategoryReducer} from './CategoryReducer';
import {ProductsReducer} from './ProductsReducer';
import {Authreducer} from './AuthReducer';
import {CartReducer} from './CartReducer';
import {SellerReducer} from './SellerReducer';
import {GoSwiftReducer} from './Go_Swift_Reducer';
const rootReducer = combineReducers({
  CategoryReducer,
  ProductsReducer,
  Authreducer,
  CartReducer,
  SellerReducer,
  GoSwiftReducer,
});

export default rootReducer;
