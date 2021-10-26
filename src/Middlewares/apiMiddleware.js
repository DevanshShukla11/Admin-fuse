import axios from "axios";
import * as constants from "../Reducers/constants";


//Createing middleware named apiMiddleware .

export const apiMiddleware = ({dispatch , getState}) => next => action => {

if(action.type!== constants.API)
{
    return next(action);
}
const BASE_URL = 'http://localhost:3000/signup';
const {url , method , success , data , postSuccess , postError } =  action.payload;


//Implementing AXIOS with redux and dispatching data :

axios({
    method,
    url: BASE_URL + url,
    data:data ? data : null,

}).then((response) =>{
      if(success){
      dispatch(success(response.data));
  }
  if(postSuccess){
      postSuccess(response.data);
     }
}).catch((err)=>{
    if(!err.response){
         console.log(err);
         }
         else {
            if(err.response.data)
            {
               if(postError){
                   postError(err.response.data);
               }
            }
    }
})
}