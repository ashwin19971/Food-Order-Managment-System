import axios from 'axios';
import { API_URL } from '../../config';

export async function getApiData() {
  return (await axios.get(API_URL)).data;
}
