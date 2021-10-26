import * as constants from './constants';

//Implementing Redux with userReducers and combineReducers : 

//Createing default state for Redux : 
const defaultState = {
    userId: null,
    name:null,
    token:null,
    isLoggedIn:false,
}

//Createing userInfo constant and getting data from localStorage :
const userInfo = localStorage.getItem('USER_INFO');

//Createing INITIAL_STATE and tranferring data of initial state to default state if the user is present : 
const INITIAL_STATE = userInfo ? JSON.parse(userInfo) : defaultState; 

export default function userReducer(state=INITIAL_STATE , action){
switch (action.type)
{
case constants.SET_USER_INFO:
     return {...action.payload}
        default : 
           return state;
}
}

