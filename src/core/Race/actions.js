import { READ_RACE, SEARCH, VIEW_SEARCH, VIEW_ERROR } from './types';

// Funcion pura que lee "race"
export const readRace = () => {
  return {
    type: READ_RACE
  }
};

// funcion pura que l

export const filterRace = (val) => {
  return {
    type: SEARCH,
    payload: val
  }
}
export const viewSearch = (val) => {
  return {
    type: VIEW_SEARCH,
    payload: val
  }
}

export const viewError = (val) => {
  return {
    type: VIEW_ERROR,
    payload: val
  }
}
