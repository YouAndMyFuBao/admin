import { deleteMission } from '@/api/deleteMission';
import { useFilterMissions } from '@/hook/useFilterMissions';
import useMissionData from '@/hook/useMissionData';
import { useEditMission } from '@/store/useEditStore';
import { useSelectAllStore } from '@/store/useSelectAllStore';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

export default function DailyTable() {
  const router = useRouter();
  const { data } = useMissionData();
  const { filteredMissions } = useFilterMissions();
  const { selectedAll } = useSelectAllStore();
  const { setEditMissionId } = useEditMission();

  // 수정하기
  const handleEdit = (missionId: number) => {
    setEditMissionId(missionId);
    router.push(`/editMission`);
  };

  // 삭제하기
  const handleDelete = async (missionId: number) => {
    await deleteMission(missionId);
    window.location.reload();
  };

  // 데이터
  const missions = selectedAll ? data : filteredMissions;
  console.log(missions);
  console.log(selectedAll);

  return (
    <table css={WrapperStyle}>
      <thead>
        <tr>
          <th css={TableTitleStyle}>날짜</th>
          <th css={TableTitleStyle}>데일리 미션</th>
          <th css={TableTitleStyle}>푸바오 답장</th>
          <th css={TableTitleStyle}>생성자</th>
          <th css={TableTitleStyle}>오픈 여부</th>
          <th css={TableTitleStyle}></th>
        </tr>
      </thead>
      <tbody>
        {missions?.map((mission, index) => (
          <tr key={index}>
            <td css={TableContentStyle}>{mission.date}</td>
            <td css={TableContentStyle}>{mission.content}</td>
            <td css={TableContentStyle}>{mission.message}</td>
            <td css={TableContentStyle}>{mission.constructor}</td>
            <td css={TableContentStyle}>{mission.openStatus}</td>
            <td css={TableContentStyle}>
              <button css={ButtonStyle} onClick={() => handleEdit(mission.id)}>
                수정
              </button>
              <button css={ButtonStyle} onClick={() => handleDelete(mission.id)}>
                삭제
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const WrapperStyle = css({
  width: '1100px',
  height: '100%',
  margin: '0 auto',
  marginTop: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  borderCollapse: 'collapse',
  backgroundColor: 'white',
});

const TableTitleStyle = css({
  color: 'black',
  fontWeight: '500',
  fontSize: '18px',
  textAlign: 'center',
  padding: '10px',
  borderRadius: '10px',
  borderBottom: '1px solid #ccc',
});

const TableContentStyle = css({
  color: 'black',
  fontSize: '14px',
  textAlign: 'center',
  padding: '20px',
  borderRadius: '10px',
  borderBottom: '1px solid #D3D3D3',
});

const ButtonStyle = css({
  padding: '8px 12px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginRight: '5px',
  '&:hover': {
    backgroundColor: '#45a049',
  },
});
