import { ADD_RACE, SET_IMG } from './types';
import { getDogsList, getDogDetails } from './services';


// v2
export const apiGetList = () => {
  
  return async dispatch => {
    try {
      const response = await getDogsList()
      response.data.message.map((value)=> {
        dispatch({
          type: ADD_RACE,
          payload: value
        })
      })
    }catch(err){
      console.log(err);
    }  
  }
}
//llamado a la api por id y seteo de action SET_IMG
export const apiGetImg = (id) => {
  return async dispatch => {
    try {
      const response = await getDogDetails(id)
        dispatch({
          type: SET_IMG,
          payload: response.data.message
        })
    } catch(err) {
      console.log(err);
      
    }
  }
}
