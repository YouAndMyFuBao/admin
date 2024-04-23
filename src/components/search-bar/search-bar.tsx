import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useSelectAllStore } from '@/store/useSelectAllStore';
import { css } from '@emotion/react';
import 'react-datepicker/dist/react-datepicker.css';
import { useSearchStore } from '../../store/useSearchStore';
import { Input } from '../input';

export default function SearchBar() {
  const {
    dateType,
    handleDateTypeChange,
    selectedDate,
    setSelectedDate,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    keyword,
    setKeyword,
    constructor,
    setConstructor,
    handleOpenStatusChange,
  } = useSearchStore();

  const { setSelectedAll } = useSelectAllStore();

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleConstructorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConstructor(e.target.value);
  };

  const handleSelectAll = () => {
    setSelected(!selected);
    // 전체 조회 전역 상태 변경
    setSelectedAll(selected);
  };

  return (
    <div css={SearchBarStyle}>
      <input
        type="text"
        placeholder="검색 조건을 선택해 주세요"
        onClick={toggleAccordion}
        css={InputStyle}
      />
      {isOpen && (
        <div css={AccordionStyle}>
          <div css={OptionStyle}>
            <label css={LabelStyle} htmlFor="all">
              전체 조회
            </label>
            <input type="checkbox" onChange={() => handleSelectAll()} />
          </div>
          {selected && (
            <div>
              <div css={OptionStyle}>
                <label css={LabelStyle} htmlFor="date">
                  날짜
                </label>
                <label htmlFor="today">날짜</label>
                <input
                  type="checkbox"
                  placeholder="날짜"
                  id="date"
                  checked={dateType === 'date'}
                  onChange={() => handleDateTypeChange('date')}
                />
                <label htmlFor="today">기간</label>
                <input
                  type="checkbox"
                  placeholder="기간"
                  id="period"
                  checked={dateType === 'period'}
                  onChange={() => handleDateTypeChange('period')}
                />
                {dateType === 'date' ? (
                  <div>
                    <DatePicker
                      placeholderText="날짜를 선택해 주세요"
                      dateFormat="yyyy.MM.dd"
                      shouldCloseOnSelect
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date as Date)}
                    />
                  </div>
                ) : (
                  <div style={{ display: 'flex' }}>
                    <p>시작일</p>
                    <DatePicker
                      placeholderText="시작일을 선택해 주세요"
                      dateFormat="yyyy.MM.dd"
                      shouldCloseOnSelect
                      selected={startDate}
                      onChange={(date) => setStartDate(date as Date)}
                    />
                    <p>종료일</p>
                    <DatePicker
                      placeholderText="종료일을 선택해 주세요"
                      dateFormat="yyyy.MM.dd"
                      shouldCloseOnSelect
                      selected={endDate}
                      onChange={(date) => setEndDate(date as Date)}
                    />
                  </div>
                )}
              </div>
              <div css={OptionStyle}>
                <label css={LabelStyle} htmlFor="keyword">
                  키워드
                </label>
                <Input
                  value={keyword}
                  placeholder="키워드를 입력해 주세요"
                  onChange={handleKeywordChange}
                />
              </div>
              <div css={OptionStyle}>
                <label css={LabelStyle} htmlFor="constructor">
                  생성자
                </label>
                <Input
                  value={constructor}
                  placeholder="생성자를 입력해 주세요"
                  onChange={handleConstructorChange}
                />
              </div>
              <div css={OptionStyle}>
                <label css={LabelStyle} htmlFor="openStatus">
                  오픈 여부
                </label>
                <div>
                  <label htmlFor="today">오픈 완료</label>
                  <input type="checkbox" onChange={() => handleOpenStatusChange('complete')} />
                  <label htmlFor="today">오픈 대기</label>
                  <input type="checkbox" onChange={() => handleOpenStatusChange('ready')} />
                </div>
              </div>
            </div>
          )}
          <button
            css={ButtonStyle}
            onClick={() => {
              toggleAccordion();
            }}
          >
            검색
          </button>
        </div>
      )}
    </div>
  );
}

const SearchBarStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px 0px',
});

const InputStyle = css({
  width: '100%',
  height: '40px',
  padding: '0px 10px',
  marginRight: '10px',
  border: '1px solid #000',
  borderRadius: '5px',
  cursor: 'pointer',
});

const AccordionStyle = css({
  width: '100%',
  marginTop: '10px',
  border: '1px solid #D9D9D9',
  borderRadius: '5px',
  padding: '10px',
});

const OptionStyle = css({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
});

const LabelStyle = css({
  width: '100px',
  textAlign: 'left',
  fontSize: '18px',
  fontWeight: '600',
  marginRight: '20px',
});

const ButtonStyle = css({
  width: '100%',
  height: '40px',
  backgroundColor: '#FFD600',
  color: 'black',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#FFD600',
  },
});
