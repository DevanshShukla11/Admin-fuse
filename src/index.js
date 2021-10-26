import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { apiMiddleware } from "./Middlewares/apiMiddleware";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import rootReducers from "./Reducers/combineReducer";
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { compose } from 'redux';
// import configureStore from './Reducers/configureStore';


const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers,composeEnhancers(applyMiddleware(apiMiddleware)));

ReactDOM.render(
  <>
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider> 
  </>,
  document.getElementById('root')
);


