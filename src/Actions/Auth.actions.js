import * as constants from "../Reducers/constants";

//For Registering user :

export const registerUser = (data , onSuccess , onError) => ({

    //Here we are createing a constant and storeing api data to data variable to use it further : 
     type: constants.API,
     payload: {
        method  : "POST" ,
        url : "api/users/register",
        data,
        success: (response) => (setUserInfo(response)),
        postSuccess: onSuccess,
        postError : onError
    }
})


//For Login user action :

export const loginUser = (data , onSuccess , onError) => ({

    //Here we are createing a constant and storeing api data to data variable to use it further : 
     type: constants.API,
     payload: {
        method  : "POST" ,
        url : "api/users/register",
        data,
        success: (response) => (setUserInfo(response)),
        postSuccess: onSuccess,
        postError : onError
    }
})


//We are getting values of registerUser in the form of data in (data) variable as a props :
const setUserInfo = (data) => {

    const parsedToken = JSON.parse((data.token.split('.')[1])); // Here we are parseing values of data varible in ASCII to Binary code .

       const userInfo = {
           userId: parsedToken.id,
           name: parsedToken.name,
           token: data.token,
           isLoggedIn: true
    }
    localStorage.setItem('SET_USER_INFO' , JSON.stringify(userInfo));
    return {
        type: constants.SET_USER_INFO ,
        paylod : userInfo
    }
}



