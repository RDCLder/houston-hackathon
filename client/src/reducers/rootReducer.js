import {combineReducers} from 'redux';
import clothesReducer from './clothesReducer';
import foodReducer from './foodReducer';
import schoolReducer from './schoolReducer';
import suppliesReducer from './suppliesReducer';

export default combineReducers ({
    clothes: clothesReducer,
    food: foodReducer,
    school: schoolReducer,
    supplies: suppliesReducer
});