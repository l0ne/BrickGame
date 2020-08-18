import {combineReducers} from 'redux';
import controlsReducer from './controls';

export const rootReducer = combineReducers({
  controls: controlsReducer,
});
