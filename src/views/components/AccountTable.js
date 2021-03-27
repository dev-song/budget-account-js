import React, { useEffect, useState } from 'react';

const ROW_DATA = {
  date: { type: 'date', value: '' },
  amount: { type: 'number', value: '' },
  detail: { type: 'text', value: '' },
  category: { type: 'text', value: '' },
  memo: { type: 'text', value: '' },
};

const AccountTable = ({ columns }) => {
  const [columnNames, setColumnNames] = useState(null);
  const [accountDetail, setAccountDetail] = useState([ROW_DATA]);

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
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setAccountDetail([...accountDetail, ROW_DATA])}>추가</button>
    </>
  );
};

export default AccountTable;
