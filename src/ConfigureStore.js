import starWarsReducer from './Reducers/StarWarsReducer.js'			

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({starWars: starWarsReducer});

export default function configureStore(initialState) {		
	return createStore(
		rootReducer,										
		initialState, 											
		applyMiddleware(thunk)			
	);
}
