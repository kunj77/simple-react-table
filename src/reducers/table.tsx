import { TableState } from "../typings";

export const initialState: TableState = {
  rowData: [],
  colData: [],
  selectedRows: []
};

const table = (state = initialState, action: any) => {
  switch (action.type) {
    case "SELECT_ROW": {
      const { isSelected, rowNum, isSingleSelectEnabled } = action;
      if (isSelected) {
        return {
          ...state,
          selectedRows: isSingleSelectEnabled
            ? []
            : state.selectedRows.filter((row: number) => row !== rowNum)
        };
      }
      return {
        ...state,
        selectedRows: isSingleSelectEnabled
          ? [rowNum]
          : state.selectedRows.concat(rowNum)
      };
    }
    case "SET_ROW_DATA":
      const { updatedRowData } = action;
      return {
        ...state,
        rowData: updatedRowData
      };
    case "SET_COL_DATA":
      const { updatedColData } = action;
      return {
        ...state,
        colData: updatedColData
      };
    default:
      return state;
  }
};

export default table;
