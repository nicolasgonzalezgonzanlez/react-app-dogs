// importo dependencias a usar y el reducer principal
import { createStore, applyMiddleware, compose } from 'redux';
// thunk te permite llamar funciones en ves de objetos
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
//inicializo el estado
const initialState = {}
//creo un middleware
const middleware = [thunk]
 /* 
    creo el store y les paso los siguientes parametros:
    Primero recibe el reducer principal
    Segundo state inicial(combinereducers)
    Tercero recibe un 
 */

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware),
  process.env.NODE_ENV === 'development' ? 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null
));

export default store;