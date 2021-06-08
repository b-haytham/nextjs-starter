import {combineReducers} from '@reduxjs/toolkit';
import  counterSlice  from './user/userSlice';

const rootReducer = combineReducers({
  counter: counterSlice 
});

export default rootReducer;
