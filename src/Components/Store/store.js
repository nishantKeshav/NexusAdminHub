import { createStore } from 'redux';
import rootReducer from '../Store/Reducers/index';

const store = createStore(rootReducer);

export default store;