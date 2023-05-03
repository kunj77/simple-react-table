export type TableState = {
  rowData: any[];
  colData: Header[];
  selectedRows: number[];
};

export enum SortDirection {
  "ASC",
  "DSC"
}

export type Header = {
  displayTitle: string;
  selector: string;
  isSortable?: boolean;
  sortDirection?: SortDirection;
  minWidth?: string;
  maxWidth?: string;
  allowOverflow?: boolean;
};
