import {combineReducers} from 'redux';
import clothesReducer from './clothesReducer';
import foodReducer from './foodReducer';
import schoolReducer from './schoolReducer';
import suppliesReducer from './suppliesReducer';

export default combinedReducers ({
    clothes: clothesReducer,
    food: foodReducer,
    school: schoolReducer,
    supplies: suppliesReducer
});