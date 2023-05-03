import TableCell from "./TableCell";
import MobileTableCell from "./MobileTableCell";

import { Header } from "../typings";
import { useAppSelector, useAppDispatch } from "../hooks";
import actions from "../actions";

type TableBodyProps = {
  columnData: Header[];
  rowData: object[];
  isSingleSelectEnabled: boolean;
  isMultiSelectEnabled: boolean;
  showConciseMobileView: boolean;
};

const TableBody: React.FC<TableBodyProps> = ({
  columnData,
  rowData,
  isSingleSelectEnabled,
  isMultiSelectEnabled,
  showConciseMobileView
}) => {
  const selectedRows = useAppSelector((state) => state.selectedRows);
  const dispatch = useAppDispatch();

  function onClickHandler(
    isSelected: boolean,
    index: number,
    isSingleSelectEnabled: boolean
  ) {
    dispatch(
      actions.tableActions.selectRow(isSelected, index, isSingleSelectEnabled)
    );
  }

  return (
    <tbody>
      {rowData.map((row, index) => (
        <tr key={`data-row-${index}`}>
          {showConciseMobileView ? (
            <MobileTableCell
              key={`cell-${index}`}
              columnData={columnData}
              rowNum={index}
              data={row}
              isSelected={selectedRows.indexOf(index) !== -1}
              isSingleSelectEnabled={isSingleSelectEnabled}
              isMultiSelectEnabled={isMultiSelectEnabled}
              onClickHandler={onClickHandler}
            />
          ) : (
            columnData.map((colData, colIndex) => (
              <TableCell
                key={`cell-${index}-${colIndex}`}
                columnData={colData}
                rowNum={index}
                isSelected={selectedRows.indexOf(index) !== -1}
                selector={colData.selector}
                data={row}
                isInput={
                  (isSingleSelectEnabled || isMultiSelectEnabled) &&
                  colIndex === 0
                    ? true
                    : false
                }
                isSingleSelectEnabled={isSingleSelectEnabled}
                isMultiSelectEnabled={isMultiSelectEnabled}
                onClickHandler={onClickHandler}
              />
            ))
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
