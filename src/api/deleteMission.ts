import { APIResponse } from '@/data/type';
import { baseAxios } from './baseAxios';

export const deleteMission = async (missionId: number) => {
  const response = await baseAxios.delete<APIResponse<string>>(`/api/v1/admin/mission/${missionId}`);
  return response.data;
};

