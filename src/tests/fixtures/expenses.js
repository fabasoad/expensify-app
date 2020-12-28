import moment from 'moment';

export const createExpense = (id, description, note, amount, createdAt) => ({
  id, description, note, amount, createdAt
});

export default [
  createExpense('1', 'Gum', '', 195, 0),
  createExpense(
    '2', 'Rent', '', 109500, moment(0).subtract(4, 'days').valueOf()),
  createExpense(
    '3', 'Credit Card', '', 4500, moment(0).add(4, 'days').valueOf())
];
