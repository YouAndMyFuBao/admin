import { APIResponse, Login } from '../data/type';
import { baseAxios } from './baseAxios';

export const postLogin = async ({ id, password }: Login) => {
  const { data } = await baseAxios.post<
    APIResponse<{
      accessToken: string;
    }>
  >('/api/v1/admin/login', { id, password });
  return data.data.accessToken;
};
