import { APIResponse, Mission } from '@/data/type';
import { baseAxios } from './baseAxios';

export const getMission = async () => {
  const { data } = await baseAxios.get<APIResponse<Mission[]>>('/api/v1/admin/mission');
  return data.data;
};
