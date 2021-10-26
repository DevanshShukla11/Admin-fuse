import { combineReducers } from "redux";
import user from './userReducers';


//Here we are combineing values of user reducers to our rootReducers . 

const rootReducers  = combineReducers({user});
 
export default rootReducers;