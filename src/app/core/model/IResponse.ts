export interface IResponse {
  content: Array<any>;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  elements: number;
  totalElements: number;
  firstPage: boolean;
  lastPage: boolean;
}
