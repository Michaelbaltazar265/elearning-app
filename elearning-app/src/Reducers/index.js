
import EmpReducer from './ClassReducer';
import StudReducer from './StudReducer';
import UserReducer from './UserReducer';
import {combineReducers} from 'redux';

let reducersCombination=combineReducers({emp:EmpReducer,stud:StudReducer, user:UserReducer});

export default reducersCombination;