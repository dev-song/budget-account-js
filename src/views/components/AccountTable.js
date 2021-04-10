import React from 'react';

const AccountTable = ({ type, columns, columnFormat, account, setAccount }) => {
  const [incomeData, expenseData] = account;
  const columnNames = Object.values(columnFormat).map(({ label }) => label);

  const updateAccount = (e, rowData, rowIndex, columnName) => {
    const updatedDetail = columns.map((detail, index) =>
      index !== rowIndex
        ? detail
        : { ...rowData, [columnName]: { ...rowData[columnName], value: e.target.value } },
    );

    if (type === 'income') {
      setAccount([{ ...incomeData, columns: updatedDetail }, expenseData]);
      return;
    }

    setAccount([incomeData, { ...expenseData, columns: updatedDetail }]);
  };

  const addAccountRow = () => {
    if (type === 'income') {
      setAccount([{ ...incomeData, columns: [...incomeData.columns, columnFormat] }, expenseData]);
      return;
    }
    setAccount([incomeData, { ...expenseData, columns: [...expenseData.columns, columnFormat] }]);
  };

  const deleteAccountRow = (targetRowIndex) => {
    const detailWithoutTargetRow = columns.filter((detail, index) => index !== targetRowIndex);

    if (type === 'income') {
      setAccount([{ ...incomeData, columns: detailWithoutTargetRow }, expenseData]);
      return;
    }

    setAccount([incomeData, { ...expenseData, columns: detailWithoutTargetRow }]);
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
          {columns &&
            columns.map((row, rowIndex) => (
              <tr key={`${rowIndex}`}>
                {Object.entries(row).map(([column, { type, value }], index) => (
                  <td key={`${index}-${column}`}>
                    <input
                      {...{ type, value }}
                      onChange={(e) => updateAccount(e, row, rowIndex, column)}
                    />
                  </td>
                ))}
                {rowIndex !== 0 && (
                  <td>
                    <button onClick={() => deleteAccountRow(rowIndex)}>X</button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={addAccountRow}>추가</button>
    </>
  );
};

export default AccountTable;
