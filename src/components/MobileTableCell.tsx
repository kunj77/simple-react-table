import { Header } from "../typings";
import { useEffect, useState } from "react";
import getColumnStyleForCell from "../utils/style";

type MobileTableCellProps = {
  columnData: Header[];
  rowNum: number;
  data: object;
  isSelected: boolean;
  isSingleSelectEnabled?: boolean;
  isMultiSelectEnabled?: boolean;
  onClickHandler: Function;
};

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
      mergedData += data[col.selector as keyof typeof data] + ` `;
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
