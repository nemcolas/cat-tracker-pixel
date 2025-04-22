import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.56:3001', // altere para IP da rede local no celular
});

export interface CatReport {
  id?: number;
  imageUri: string;
  observation: string;
  latitude: number;
  longitude: number;
}

export const getCats = async (): Promise<CatReport[]> => {
  const response = await api.get('/cats');
  return response.data;
};

export const postCat = async (cat: CatReport): Promise<void> => {
  await api.post('/cats', cat);
};
