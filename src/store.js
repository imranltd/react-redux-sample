import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

import { getChatLog, getMemberList } from './service';

const initialState = {
	type: '',
	messages: {},
  members: {},
	isPending: false,
}

export const reducer = (state, action) => {
  switch (action.type) {    
    case 'MESSAGES_LOADING_PENDING':
    	return {
    		...state,
        type: action.type,
    		//messages: action.payload,
        isPending: true
    	};

    case 'MESSAGES_LOADING_FULFILLED':
    return{
      ...state,
        type: action.type,
        messages: action.payload,
        isPending: false
      };

    case 'MEMBERS_LOADING_PENDING':
      return {
        ...state,
        type: action.type,
        isPending: true
      };

    case 'MEMBERS_LOADING_FULFILLED':
    return{
      ...state,
        type: action.type,
        members: action.payload,
        isPending: false
      };

    default:
      return state
  }
}

const composeEnhancers = typeof window === 'object' && 
                          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
                          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(
																	thunkMiddleware,
																	promiseMiddleware()));

export const store = createStore(reducer, initialState, enhancer);

store.dispatch((dispatch) => {
  dispatch(getChatLog())
  dispatch(getMemberList())
})
