import { combineReducers } from 'redux';

import themeReducer from '../Reducers/themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;