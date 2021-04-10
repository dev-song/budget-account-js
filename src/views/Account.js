import React, { useState, useEffect } from 'react';

import AccountTable from './components/AccountTable';

const COLUMN_INFO = {
  date: { label: '날짜', type: 'date', value: '' },
  amount: { label: '금액', type: 'number', value: '' },
  detail: { label: '세부내역', type: 'text', value: '' },
  category: { label: '분류', type: 'text', value: '' },
  memo: { label: '비고', type: 'text', value: '' },
};

const TABLE_INFO = [
  {
    title: '수입',
    columns: COLUMN_INFO,
  },
  {
    title: '지출',
    columns: COLUMN_INFO,
  },
];

const Account = ({ month }) => {
  const [account, setAccount] = useState(TABLE_INFO);

  const localStorageKey = `${month}-account`;

  useEffect(() => {
    loadAccount();
  }, []);

  const saveAccount = () => {
    const localStorage = window.localStorage;
    localStorage.setItem(localStorageKey, JSON.stringify(account));
  };

  const loadAccount = () => {
    const localStorage = window.localStorage;
    const previousData = localStorage.getItem(localStorageKey);

    if (!previousData) return;
    setAccount(JSON.parse(previousData));
  };

  return (
    <>
      <h1>{month}월 가계부</h1>
      <section>
        <button onClick={saveAccount}>전체 저장</button>
        {account.map((tableData, index) => {
          const { title, columns } = tableData;

          return (
            <div key={index}>
              <h1>{title}</h1>
              <AccountTable {...{ title, columns, account, setAccount }} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Account;
