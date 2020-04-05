import {createStore} from 'redux';
import rootReducer from '../reducers';
//import {contacts} from '../static-data';

const store = createStore(rootReducer);

export default store;