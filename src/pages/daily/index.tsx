import { DailyTable } from '@/components/daily-table';
import { Navigation } from '@/components/navigation';
import { SearchBar } from '@/components/search-bar';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

const DailyPage = () => {
  const router = useRouter();
  return (
    <div css={WrapperStyle}>
      <Navigation />
      <div css={PageStyle}>
        <div style={{ display: 'flex' }}>
          <p style={{ fontSize: '20px', fontWeight: '600', margin: '20px 0px' }}>데일리 미션</p>
          <button
            onClick={() => {
              router.push('/addMission');
            }}
          >
            추가
          </button>
        </div>
        <SearchBar />
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
});

const PageStyle = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 20px',
});
