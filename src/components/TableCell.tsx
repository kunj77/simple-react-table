import { Header } from "../typings";

type TableCellProps = {
  selector: string;
  data: object;
  columnData: Header;
  isInput: boolean;
  rowNum: number;
  isSelected: boolean;
  isSingleSelectEnabled: boolean;
  isMultiSelectEnabled: boolean;
  onClickHandler: Function;
};

function getColumnStyleForCell(columnDetails: Header) {
  let cellStyle = {};
  if (columnDetails.minWidth) {
    cellStyle.minWidth = columnDetails.minWidth;
  }
  if (columnDetails.maxWidth) {
    cellStyle.maxWidth = columnDetails.maxWidth;
  }
  if (columnDetails.allowOverflow) {
    (cellStyle.overflow = "hidden"),
      (cellStyle.textOverflow = "clip"),
      (cellStyle.whiteSpace = "nowrap");
  }
  return cellStyle;
}

const TableCell: React.FC<TableCellProps> = ({
  selector,
  data,
  columnData,
  isInput,
  rowNum,
  isSelected,
  isSingleSelectEnabled,
  isMultiSelectEnabled,
  onClickHandler
}) => {
  return (
    <td style={getColumnStyleForCell(columnData)}>
      {isInput && isMultiSelectEnabled && (
        <div>
          <div className="select-container checkbox">
            <input
              id={`select-${rowNum}`}
              type={"checkbox"}
              checked={isSelected}
              onChange={() =>
                onClickHandler(isSelected, rowNum, isSingleSelectEnabled)
              }
            />
            <label htmlFor={`select-${rowNum}`}></label>
          </div>

          <span className="select-input-content">
            {data[selector as keyof typeof data]}
          </span>
        </div>
      )}

      {isInput && !isMultiSelectEnabled && isSingleSelectEnabled && (
        <label className="radio">
          <input
            type="radio"
            name="radio"
            checked={isSelected}
            onChange={() =>
              onClickHandler(isSelected, rowNum, isSingleSelectEnabled)
            }
          />
          <span>{data[selector as keyof typeof data]}</span>
        </label>
      )}

      {!isInput && data[selector as keyof typeof data]}
      <hr />
    </td>
  );
};

export default TableCell;
