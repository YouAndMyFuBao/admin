import { DailyEditor } from '@/components/daily-editor';
import { Navigation } from '@/components/navigation';
import { css } from '@emotion/react';

const AddMissionPage = () => {
  return (
    <div css={WrapperStyle}>
      <Navigation />
      <div css={PageStyle}>
        <p style={{ fontSize: '20px', fontWeight: '600', margin: '20px 0px' }}>미션 추가하기</p>
        <DailyEditor data={null} type='add' />
      </div>
    </div>
  );
};

export default AddMissionPage;

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
