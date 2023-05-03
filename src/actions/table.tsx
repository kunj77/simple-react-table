import { Header } from "../typings";

const selectRow = (
  isSelected: boolean,
  rowNum: number,
  isSingleSelectEnabled: boolean
) => {
  return {
    type: "SELECT_ROW",
    isSelected,
    rowNum,
    isSingleSelectEnabled
  };
};

const setRowData = (updatedRowData: any[]) => {
  return {
    type: "SET_ROW_DATA",
    updatedRowData
  };
};

const setColData = (updatedColData: Header[]) => {
  return {
    type: "SET_COL_DATA",
    updatedColData
  };
};

export default {
  selectRow,
  setRowData,
  setColData
};
