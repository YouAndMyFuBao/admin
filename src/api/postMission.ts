import { APIResponse, PostMission } from '@/data/type';
import { baseAxios } from './baseAxios';

export const postMission = async ({ content, answer }: PostMission) => {
  const { data } = await baseAxios.post<APIResponse<string>>('/api/v1/admin/mission', {
    content,
    answer,
  });
  console.log(data);
  return data;
};
