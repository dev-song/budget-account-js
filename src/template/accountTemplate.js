export const AccountData = [
  { key: 'date', label: '날짜', inputType: 'date', isRequired: true, validator: () => '' },
  { key: 'amount', label: '금액', inputType: 'number', isRequired: true, validator: () => '' },
  { key: 'detail', label: '세부내역', inputType: 'text', isRequired: true, validator: () => '' },
  { key: 'categories', label: '분류', inputType: 'text', isRequired: true, validator: () => '' },
  { key: 'memo', label: '비고', inputType: 'text', isRequired: false, validator: () => '' },
];
