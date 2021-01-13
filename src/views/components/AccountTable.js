import React, { useEffect, useState } from 'react';

const ROW_DATA = {
  date: '',
  amount: '',
  detail: '',
  category: '',
  memo: '',
};

const AccountTable = ({ typeData: { columns } }) => {
  const [columnNames, setColumnNames] = useState(null);
  const [expense, setExpense] = useState([ROW_DATA]);

  useEffect(() => {
    if (!columns) return;

    console.log(columns);
    setColumnNames(Object.values(columns));
  }, [columns]);

  return (
    <>
      <table>
        <thead>
          <tr>
            {columnNames.map((name, index) => (
              <th key={index}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expense.map((row, rowIndex) => (
            <tr>
              {Object.keys(row).map((column, columnIndex) => {
                const handleInputChange = (e) => setExpense(expense.map((expenseItem, expenseItemIndex) => {
                  if (expenseItemIndex === rowIndex) {
                    return {
                      ...row,
                      [column]: e.target.value,
                    };
                  }

                  return expenseItem;
                }));

                return (
                  <td>
                    <input
                      value={row[column]}
                      onChange={handleInputChange}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => setExpense([
          ...expense,
          ROW_DATA,
        ])}
      >
        추가
      </button>
    </>
  );
}

export default AccountTable;