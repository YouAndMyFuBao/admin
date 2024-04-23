import { DailyEditor } from '@/components/daily-editor';
import { Navigation } from '@/components/navigation';
import useMissionData from '@/hook/useMissionData';
import { useEditMission } from '@/store/useEditStore';
import { css } from '@emotion/react';

const EditMissionPage = () => {
  const { data } = useMissionData();
  const { editMissionId } = useEditMission();

  const filterEditMissionData = data?.find((mission) => mission.id === editMissionId);

  return (
    <div css={WrapperStyle}>
      <Navigation />
      <div css={PageStyle}>
        {filterEditMissionData && <DailyEditor data={filterEditMissionData} type='edit'/>}
      </div>
    </div>
  );
};

export default EditMissionPage;

const WrapperStyle = css({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const PageStyle = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  padding: '0px 20px',
});
