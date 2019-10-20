import { Filter, Sorting } from './interfaces';

export const defaultPageSize = 5;
export const pageSizes: number[] = [
  5,
  10,
  25
];

export const defaultFilter: Filter = {
  column: 'id',
  value: '',
  strict: false
};

export const defaultSorting: Sorting = {
  column: 'name',
  direction: 'asc'
};
