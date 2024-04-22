import { useState } from 'react';
import { Mission } from '@/data/type';
import { css } from '@emotion/react';
import { Input } from '../input';

interface DailyEditorProps {
  filterEditMissionData: Mission;
}

export default function DailyEditor({ filterEditMissionData }: DailyEditorProps) {
  const { date, content, message, constructor, openStatus } = filterEditMissionData;

  const [dateState, setDate] = useState(date);
  const [contentState, setContent] = useState(content);
  const [messageState, setMessage] = useState(message);
  const [constructorState, setConstructor] = useState(constructor);
  const [openStatusState, setOpenStatus] = useState(openStatus);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleConstructorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConstructor(e.target.value);
  };

  const handleOpenStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenStatus(e.target.value);
  };

  return (
    <>
      <div css={InputContainerStyle}>
        <p css={TitleStyle}>날짜</p>
        <Input placeholder="날짜" value={dateState} onChange={handleDateChange} />
      </div>
      <div css={InputContainerStyle}>
        <p css={TitleStyle}>데일리 미션 내용</p>
        <Input placeholder="데일리 미션 내용" value={contentState} onChange={handleContentChange} />
      </div>
      <div css={InputContainerStyle}>
        <p css={TitleStyle}>푸바오 답장</p>
        <Input placeholder="푸바오 답장" value={messageState} onChange={handleMessageChange} />
      </div>
      <div css={InputContainerStyle}>
        <p css={TitleStyle}>생성자</p>
        <Input placeholder="생성자" value={constructorState} onChange={handleConstructorChange} />
      </div>
      <div css={InputContainerStyle}>
        <p css={TitleStyle}>오픈 여부</p>
        <Input placeholder="오픈 여부" value={openStatusState} onChange={handleOpenStatusChange} />
      </div>
      <button
        css={ButtonStyle}
        // TO DO : 수정하기 API 연결
        onClick={() => {
          console.log('수정하기');
          alert('수정하기 완료!');
        }}
      >
        수정하기
      </button>
    </>
  );
}

const InputContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginBottom: '20px',
  gap: '10px',
});

const TitleStyle = css({
  fontSize: '18px',
  fontWeight: '500',
  color: 'black',
});

const ButtonStyle = css({
  width: '100%',
  height: '50px',
  backgroundColor: '#FFD600',
  borderRadius: '10px',
  fontWeight: '600',
  fontSize: '18px',
});
