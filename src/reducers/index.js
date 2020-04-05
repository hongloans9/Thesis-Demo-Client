import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import OffersReducer from './offers_reducer';

const allReducers = combineReducers({
    offersPage: OffersReducer,
    form: formReducer
});

export default allReducers;

