import { TableProps } from 'antd';
import { useQueryParams } from './useQueryParams';

type UsePaginationOptions = {
  /**
   * Only necessary if multiple tables are on the same page
   */
  prefix?: string;
  defaultCurrent?: number;
  defaultPageSize?: number;
  pageSizeOptions?: number[];
  total: number;
};

export function useTablePagination({
  prefix = '',
  defaultCurrent = 1,
  defaultPageSize = 10,
  pageSizeOptions = [10, 20, 50, 100],
  total,
}: UsePaginationOptions): TableProps['pagination'] {
  const { queryParams, addParam } = useQueryParams();
  const currentPage = Number(queryParams[`${prefix}page`] ?? String(defaultCurrent));
  const pageSize = Number(queryParams[`${prefix}pageSize`] ?? String(defaultPageSize));

  const onChange = (page: number) => {
    addParam(`${prefix}page`, page.toString(), String(defaultCurrent));
  };
  const onShowSizeChange = (_: number, size: number) => {
    addParam(`${prefix}pageSize`, size.toString(), String(defaultPageSize));
  };

  return {
    current: currentPage,
    pageSize,
    onChange,
    onShowSizeChange,
    defaultCurrent,
    defaultPageSize,
    pageSizeOptions,
    total,
    hideOnSinglePage: true,
  };
}