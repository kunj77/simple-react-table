import { useEffect, useState, useReducer } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

import actions from "../actions";
import { SortDirection, Header } from "../typings";
import { useAppDispatch, useAppSelector } from "../hooks";
import "../styles/styles.scss";

type ReactTableProps = {
  hideHeaderRow?: boolean;
  columnData: Header[];
  tableData: object[];
  isSingleSelectEnabled?: boolean;
  isMultiSelectEnabled?: boolean;
  theme?: string;
};

const ReactTable: React.FC<ReactTableProps> = ({
  hideHeaderRow,
  columnData,
  tableData,
  isSingleSelectEnabled,
  isMultiSelectEnabled,
  theme
}) => {
  const [showConciseView, setShowConciseView] = useState(false);
  const rowData = useAppSelector((state) => state.rowData);
  const colData = useAppSelector((state) => state.colData);

  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const dispatch = useAppDispatch();

  function handleView() {
    const isMobile = window.innerWidth <= 500;
    setShowConciseView(isMobile && columnData.length > 3);
  }

  function onSortDirectionChange(colIndex: number) {
    const columnToSort = colData[colIndex];
    const sortByProperty = columnToSort.selector;
    if (columnToSort && columnToSort.isSortable) {
      if (columnToSort.sortDirection === SortDirection.ASC) {
        const updatedRowData = rowData.sort(
          (a, b) => -1 * a[sortByProperty].localeCompare(b[sortByProperty])
        );
        dispatch(actions.tableActions.setRowData(updatedRowData));
        const updatedColData = colData;
        updatedColData[colIndex].sortDirection = SortDirection.DSC;
        dispatch(actions.tableActions.setColData(updatedColData));
      } else {
        const updatedRowData = rowData.sort((a, b) =>
          a[sortByProperty].localeCompare(b[sortByProperty])
        );
        dispatch(actions.tableActions.setRowData(updatedRowData));
        const updatedColData = colData;
        updatedColData[colIndex].sortDirection = SortDirection.ASC;
        dispatch(actions.tableActions.setColData(updatedColData));
      }
      forceUpdate();
    }
  }

  useEffect(() => {
    dispatch(actions.tableActions.setRowData(tableData));
    dispatch(actions.tableActions.setColData(columnData));

    handleView();
    // listen for resize event and handle view setting in callback handler
    window.addEventListener("resize", handleView.bind(this));
  }, []);

  return (
    <div className={`${theme ? theme : ""}`}>
      <table>
        {!hideHeaderRow && (
          <thead>
            <TableHeader
              headerData={columnData}
              onClickHandler={onSortDirectionChange}
              showConciseMobileView={showConciseView}
            />
          </thead>
        )}
        {rowData && (
          <TableBody
            columnData={columnData}
            rowData={rowData}
            isSingleSelectEnabled={isSingleSelectEnabled}
            isMultiSelectEnabled={isMultiSelectEnabled}
            showConciseMobileView={showConciseView}
          />
        )}
      </table>
    </div>
  );
};

export default ReactTable;
