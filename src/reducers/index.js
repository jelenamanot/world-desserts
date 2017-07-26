import { combineReducers } from 'redux';
import DessertsReducer from './reducer_desserts';
import ActiveDessert from './reducer_active_dessert';

const rootReducer = combineReducers({
   desserts: DessertsReducer,
   activeDessert: ActiveDessert
});

export default rootReducer;
