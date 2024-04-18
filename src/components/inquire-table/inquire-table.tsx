import useEnquiryData from '@/hook/useEnquireData';
import { css } from '@emotion/react';

export default function InquireTable() {
  const { data } = useEnquiryData();
  return (
    <table css={WrapperStyle}>
      <thead>
        <tr>
          <th css={TableTitleStyle}>제목</th>
          <th css={TableTitleStyle}>내용</th>
          <th css={TableTitleStyle}>이메일</th>
          <th css={TableTitleStyle}>닉네임</th>
          <th css={TableTitleStyle}>날짜</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((inquire, index) => (
          <tr key={index}>
            <td css={TableContentStyle}>{inquire.title}</td>
            <td css={TableContentStyle}>{inquire.content}</td>
            <td css={TableContentStyle}>{inquire.email}</td>
            <td css={TableContentStyle}>{inquire.name}</td>
            <td css={TableContentStyle}>{inquire.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const WrapperStyle = css({
  width: '100%',
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
  borderBottom: '1px solid #ccc',
});

const TableContentStyle = css({
  color: 'black',
  fontSize: '14px',
  textAlign: 'center',
  padding: '20px',
  borderBottom: '1px solid #D3D3D3',
});
