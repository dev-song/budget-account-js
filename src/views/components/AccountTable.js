import React, { useEffect, useState } from 'react';

const ROW_DATA = {
  date: { type: 'date', value: '' },
  amount: { type: 'number', value: '' },
  detail: { type: 'text', value: '' },
  category: { type: 'text', value: '' },
  memo: { type: 'text', value: '' },
};

const AccountTable = ({ title, columns }) => {
  const [columnNames, setColumnNames] = useState(null);
  const [accountDetail, setAccountDetail] = useState([ROW_DATA]);

  const localStorageKey = title === '수입' ? 'income' : 'expense';

  useEffect(() => {
    loadAccount();
  }, []);

  useEffect(() => {
    if (!columns) return;

    setColumnNames(Object.values(columns));
  }, [columns]);

  const updateAccountDetail = (e, rowData, rowIndex, columnName) => {
    const updatedDetail = accountDetail.map((detail, index) =>
      index !== rowIndex
        ? detail
        : { ...rowData, [columnName]: { ...rowData[columnName], value: e.target.value } },
    );
    setAccountDetail(updatedDetail);
  };

  const deleteAccountDetail = (targetRowIndex) => {
    const accountDetailExceptTargetRow = accountDetail.filter(
      (detail, index) => index !== targetRowIndex,
    );
    setAccountDetail(accountDetailExceptTargetRow);
  };

  const loadAccount = () => {
    const localStorage = window.localStorage;
    const previousData = localStorage.getItem(localStorageKey);

    if (!previousData) return;
    setAccountDetail(JSON.parse(previousData));
  };

  const saveAccount = () => {
    const localStorage = window.localStorage;
    localStorage.setItem(localStorageKey, JSON.stringify(accountDetail));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {columnNames &&
              columnNames.map((name, index) => <th key={`${index}-${name}`}>{name}</th>)}
          </tr>
        </thead>
        <tbody>
          {accountDetail.map((row, rowIndex) => (
            <tr key={`${rowIndex}`}>
              {Object.entries(row).map(([column, { type, value }], index) => (
                <td key={`${index}-${column}`}>
                  <input
                    {...{ type, value }}
                    onChange={(e) => updateAccountDetail(e, row, rowIndex, column)}
                  />
                </td>
              ))}
              {rowIndex !== 0 && (
                <td>
                  <button onClick={() => deleteAccountDetail(rowIndex)}>X</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setAccountDetail([...accountDetail, ROW_DATA])}>추가</button>
      <button onClick={saveAccount}>저장</button>
    </>
  );
};

export default AccountTable;
