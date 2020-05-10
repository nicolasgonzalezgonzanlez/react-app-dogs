import axios from 'axios';

export const getDogsList = () => axios.get('https://dog.ceo/api/breeds/list');
export const getDogDetails = (id) => axios.get(`https://dog.ceo/api/breed/${id}/images/random`);