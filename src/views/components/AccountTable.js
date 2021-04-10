import React, { useState } from 'react';

// 추후 개선방향
// Account 컴포넌트에서 수입/지출에 대한 데이터를 모두 관리
// Table 컴포넌트는 데이터 표시만을 담당 (input field 변경은 Account 컴포넌트 state에 직접 반영됨)
// Account 컴포넌트의 데이터를 Table 컴포넌트에서 직접 변경할 때 객체 구조 등 고민 필요

// 저장 버튼을 눌렀을 때는 localStorage에 해당 월이 key로, 수입 지출이 합쳐진 데이터가 value로 입력되어야 할 듯

const ROW_DATA = {
  date: { type: 'date', value: '' },
  amount: { type: 'number', value: '' },
  detail: { type: 'text', value: '' },
  category: { type: 'text', value: '' },
  memo: { type: 'text', value: '' },
};

const AccountTable = ({ columns }) => {
  const [accountDetail, setAccountDetail] = useState([ROW_DATA]);

  const columnNames = Object.values(columns).map(({ label }) => label);

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
          {accountDetail &&
            accountDetail.map((row, rowIndex) => (
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
    </>
  );
};

export default AccountTable;
