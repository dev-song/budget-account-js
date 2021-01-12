import React, { useState } from 'react';

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
    }
  }
];

const Account = ({ month }) => {
  return (
    <>
      <h1>{month}월 가계부</h1>
      <section>
        {COLUMN_INFO.map(typeData => {
          const { title, columns } = typeData;
          const columnNames = Object.values(columns);

          return (
            <>
              <h1>{title}</h1>
              <table>
                <thead>
                  <tr>
                    {columnNames.map((name, index) => (
                      <th key={index}>{name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {columnNames.map((name, index) => (
                      <td key={index}><input /></td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </>
          );
        })}
      </section>
    </>
  );
}

export default Account;