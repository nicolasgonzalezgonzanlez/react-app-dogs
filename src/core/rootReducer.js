import { combineReducers } from 'redux'
// importo un combineReducers para combinar todos los estados que vaya a crear en el fururo
import race from './Race/reducers';

export default combineReducers({
  // raceReducer === nombre que va tomar el state general
  raceReducer: race
});
