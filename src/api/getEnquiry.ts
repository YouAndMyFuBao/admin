import { APIResponse, Inquire } from '@/data/type';
import { baseAxios } from './baseAxios';

export const getEnquiry = async () => {
  const { data } = await baseAxios.get<APIResponse<Inquire[]>>('/api/v1/admin/enquiry');
  return data.data;
};
