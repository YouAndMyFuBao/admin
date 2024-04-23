import { useState, useEffect } from 'react';
import { Mission } from '@/data/type';
import { useSearchStore } from '@/store/useSearchStore';
import useMissionData from './useMissionData';

type FilteredMissions = {
  filteredMissions: Mission[];
};

export const useFilterMissions = (): FilteredMissions => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const { dateType, selectedDate, startDate, endDate, keyword, constructor, openStatus } =
    useSearchStore();
  const { data } = useMissionData();

  useEffect(() => {
    setMissions(data || []);
  }, [data]);

  const filteredMissions = missions.filter((mission) => {
    // 모든 검색 조건을 하나의 조건으로 결합하여 반환합니다.
    return (
      // 날짜
      (dateType === 'date' && selectedDate
        ? new Date(mission.date).setHours(0, 0, 0, 0) === selectedDate.setHours(0, 0, 0, 0)
        : true) &&
      // 기간
      (dateType === 'period' && startDate && endDate
        ? new Date(mission.date) >= startDate && new Date(mission.date) <= endDate
        : true) &&
      // 키워드
      (keyword
        ? mission.content.toLowerCase().includes(keyword.toLowerCase()) ||
          mission.message.toLowerCase().includes(keyword.toLowerCase())
        : true) &&
      // 생성자
      (constructor
        ? mission.constructor.toLowerCase().includes(constructor.toLowerCase())
        : true) &&
      // 오픈 상태
      (openStatus ? mission.openStatus === openStatus : true)
    );
  });

  return { filteredMissions };
};
