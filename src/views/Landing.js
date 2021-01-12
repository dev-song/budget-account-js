import React, { useState } from 'react';

const MONTHS = [];
for (let i = 1; i <= 12; i++) {
  MONTHS.push(i);
}

const Landing = ({ setMonth }) => {
  const [currentMonth, setCurrentMonth] = useState(null);

  return (
    <>
      <h1>가계부에 오신 것을 환영합니다.</h1>
      <h3>가계부를 작성할 달을 선택해주세요.</h3>
      <select
        onChange={({ target: { value } }) => {
          setCurrentMonth(value);
        }}
      >
        {MONTHS.map((month, index) => (
          <option key={index}>
            {month}
          </option>
        ))}
      </select>
      <button onClick={() => setMonth(currentMonth)}>다음</button>
    </>
  );
}

export default Landing;