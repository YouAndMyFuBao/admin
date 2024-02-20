import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const handleUserIdInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setUserId(inputValue);
    console.log('아이디', userId);
  };

  const handleUserPasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setUserPassword(inputValue);
    console.log('비밀번호', userPassword);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p style={{ fontSize: '20px', fontWeight: '500', color: '#64A47A', marginTop: '8px',marginBottom: '8px'}}>
        디어바오 어드민 페이지
      </p>
      {/* 아이디 & 비밀번호 입력폼 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <input
          placeholder="아이디를 입력해 주세요"
          value={userId}
          onChange={handleUserIdInputChange}
          style={{ width: '200px', height: '30px', borderRadius: '8px', marginBottom: '8px' }}
        />
        <input
          placeholder="비밀번호를 입력해 주세요"
          value={userPassword}
          onChange={handleUserPasswordInputChange}
          style={{ width: '200px', height: '30px', borderRadius: '8px', marginBottom: '8px' }}
        />
      </div>
      <button
          style={{ width: '200px', height: '30px', borderRadius: '8px', backgroundColor: '#64A47A', color: 'white'}}
          onClick={() => {
            router.push('/daily');
          }}
      >
        로그인
      </button>
    </div>
  );
}
