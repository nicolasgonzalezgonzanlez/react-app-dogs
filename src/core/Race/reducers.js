//primero importo las const actions a utilizar (no importar las acciones)
import { ADD_RACE, READ_RACE, SET_IMG, SEARCH, VIEW_SEARCH, VIEW_ERROR } from './types';
//creo un estado nuevo
const initialState = {
  race: [],
  image: '',
  search: '',
  viewSearch: null,
  viewError: [
    {
      error: '',
      view: false
    }
  ]
}
/*
  Primero se crea una funcion en la cual se le pasa el estado por default
  y por segunda se pasa el action
*/
export default function (state = initialState, action) {
  // se crea un switch para evaluar los actions
  switch (action.type) {
    case ADD_RACE:
      // retorna el estado del state y lo muta
      return {
        ...state,
        race: [...state.race, action.payload]
      }
    // retorna solamente el estado
    case READ_RACE:
      return {
        ...state
      }

    case SET_IMG:
      return {
        ...state,
        image: action.payload
      }

    case SEARCH:
      return {
        ...state,
        search: action.payload
      }

    case VIEW_SEARCH:
      return {
        ...state,
        viewSearch: action.payload
      }

    case VIEW_ERROR:
      return {
        ...state,
        viewError: action.payload
      }

    default:
      return state;
  }
}