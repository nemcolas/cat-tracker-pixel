import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.108.194:3001', // alterar o ip pro ip do pc (tem q ta na mesma rede do celular)
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
