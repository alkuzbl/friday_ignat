export type PaginationPropsType = {
  totalCount: number; // общее количество страниц которое приходит с сервера
  selectPage: (page: number) => void; // колбэк в который передается следующая страница
  portionSize?: number; // количество отображенных страниц в пагинации // если не передано, то 7 (PREV 1 2 3 4 5 6 7 ... 342 NEXT)
  setCountItem?: (pageCount: number) => void; // установить количество элементов (pageCount) на странице (select)
  pageCount?: number; // количество элементов на странице (select)
  optionValue?: number[]; // массив данных для select
  pathToUrl: string; // строка, которая отображается в URL
};
