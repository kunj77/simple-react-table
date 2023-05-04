import { Header } from "../typings";
import { useEffect, useState } from "react";

type MobileTableCellProps = {
  columnData: Header[];
  rowNum: number;
  data: object;
  isSelected: boolean;
  isSingleSelectEnabled?: boolean;
  isMultiSelectEnabled?: boolean;
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

const MobileTableCell: React.FC<MobileTableCellProps> = ({
  columnData,
  rowNum,
  data,
  isSelected,
  isSingleSelectEnabled,
  isMultiSelectEnabled,
  onClickHandler
}) => {
  const [displayData, setDisplayData] = useState("");

  useEffect(() => {
    let mergedData = "";
    columnData.forEach(function (col) {
      mergedData += data[col.selector] + ` `;
    });
    setDisplayData(mergedData);
  }, []);

  return (
    <td style={getColumnStyleForCell(columnData[0])}>
      {isMultiSelectEnabled && (
        <div>
          <div className="select-container checkbox">
            <input
              id={`select-${rowNum}`}
              type={"checkbox"}
              checked={isSelected}
              onChange={() =>
                onClickHandler(isSelected, rowNum, isMultiSelectEnabled)
              }
            />
            <label htmlFor={`select-${rowNum}`}></label>
          </div>

          <span className="select-input-content">{displayData}</span>
        </div>
      )}

      {isSingleSelectEnabled && !isMultiSelectEnabled && (
        <label className="radio">
          <input
            type="radio"
            name="radio"
            checked={isSelected}
            onChange={() =>
              onClickHandler(isSelected, rowNum, isSingleSelectEnabled)
            }
          />
          <span>{displayData}</span>
        </label>
      )}

      {!isMultiSelectEnabled && !isSingleSelectEnabled && displayData}
      <hr />
    </td>
  );
};

export default MobileTableCell;
