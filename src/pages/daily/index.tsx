
import { DailyTable } from '@/components/daily-table';
import { Navigation } from '@/components/navigation';
import { css } from '@emotion/react';

const DailyPage = () => {
  return (
    <div css={WrapperStyle}>
      <Navigation />
      <div css={PageStyle}>
        <p style={{fontSize: '20px', fontWeight: '600', margin: '20px 0px'}}>데일리 미션</p>
        <div></div>
        <DailyTable />
      </div>
    </div>
  );
};

export default DailyPage;

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