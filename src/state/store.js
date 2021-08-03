import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

//the store links the data to the state management
//with combine reducers we don't need to create more than one store
export const store = createStore(reducers, {}, applyMiddleware(thunk));
