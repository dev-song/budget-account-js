import React from 'react';

import AccountTable from './components/AccountTable';

const COLUMN_INFO = [
  {
    title: '수입',
    columns: {
      date: '날짜',
      amount: '금액',
      detail: '수입 내역',
      category: '분류',
      memo: '비고',
    },
  },
  {
    title: '지출',
    columns: {
      date: '날짜',
      amount: '금액',
      detail: '지출 내역',
      category: '분류',
      memo: '비고',
    },
  },
];

const Account = ({ month }) => {
  return (
    <>
      <h1>{month}월 가계부</h1>
      <section>
        {COLUMN_INFO.map((typeData, index) => {
          const { title, columns } = typeData;

          return (
            <div key={index}>
              <h1>{title}</h1>
              <AccountTable {...{ columns }} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Account;
