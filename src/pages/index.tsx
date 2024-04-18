import { setCookie } from 'cookies-next';
import { useState } from 'react';
import { postLogin } from '@/api/postLogin';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const handleUserIdInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setUserId(inputValue);
  };

  const handleUserPasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setUserPassword(inputValue);
  };

  const handleLoginButtonClick = async () => {
    const accessToken = await postLogin({ id: userId, password: userPassword });
    if (accessToken) {
      await setCookie('accessToken', accessToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
      alert('로그인 성공');
      router.push('/daily');
    } else {
      alert('로그인에 실패했습니다.');
    }
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
      <p
        style={{
          fontSize: '20px',
          fontWeight: '500',
          color: '#64A47A',
          marginTop: '8px',
          marginBottom: '8px',
        }}
      >
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
        style={{
          width: '200px',
          height: '30px',
          borderRadius: '8px',
          backgroundColor: '#64A47A',
          color: 'white',
        }}
        onClick={handleLoginButtonClick}
      >
        로그인
      </button>
    </div>
  );
}
