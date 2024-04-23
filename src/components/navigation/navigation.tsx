import { css } from '@emotion/react';
import { useRouter } from 'next/router';

type NavigationType = {
  id: number;
  name: string;
  path: string;
};

const NavigationList: NavigationType[] = [
  { id: 0, name: '데일리 미션', path: '/daily' },
  // TO DO : 닉네임 규정 페이지 추가
  { id: 1, name: '닉네임 규정', path: '/daily' },
  { id: 2, name: '문의', path: '/inquire' },
];

export default function Navigation() {
  const router = useRouter();
  return (
    <div css={WrapperStyle}>
      {NavigationList.map((item) => (
        <button
          key={item.id}
          css={ButtonStyle}
          onClick={() => {
            router.push(`/${item.path}`);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

const WrapperStyle = css({
  width: '260px',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: ' #64A47A',
});

const ButtonStyle = css({
  width: '100%',
  height: '50px',
  border: 'none',
  borderRadius: '10px',
  marginBottom: '10px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
})