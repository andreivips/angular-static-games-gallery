export interface Filter {
  column: string;
  value: string;
  strict: boolean;
}

export interface Sorting {
  column: string;
  direction: 'asc'|'desc';
}

export interface SearchResult<T> {
  data: Array<T>;
  total: number;
}
