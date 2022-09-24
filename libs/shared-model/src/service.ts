export type BaseServiceParam = {
  mock: boolean;
};

export type PaginatedResponse<T> = {
  next: string;
  prev: string;
  results: T[];
  totalCount: number;
};

export const INITIAL_PAGINATED_RES = {
  next: '',
  prev: '',
  results: [],
  totalCount: 0,
};
