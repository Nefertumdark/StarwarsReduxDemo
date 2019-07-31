import starWarsReducer from './Reducers/StarWarsReducer.js'			

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer } from 'redux-form'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({starWars: starWarsReducer, form: reducer});

export default function configureStore(initialState) {		
	return createStore(
		rootReducer,										
		initialState, 											
		applyMiddleware(thunk)			
	);
}
