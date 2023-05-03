import { Header, SortDirection } from "../typings";
import SortingDown from "../icons/SortingDown.png";
import SortingUp from "../icons/SortingUp.png";
import SortingNeutral from "../icons/SortingNeutral.png";

type TableHeaderProps = {
  headerData: Header[];
  onClickHandler: any;
  showConciseMobileView: boolean;
};

function getIconToShow(sortDirection: SortDirection | undefined) {
  return sortDirection === undefined
    ? SortingNeutral
    : sortDirection === SortDirection.ASC
    ? SortingDown
    : SortingUp;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  headerData,
  onClickHandler,
  showConciseMobileView
}) => {
  return (
    <tr>
      {showConciseMobileView ? (
        //In case of concise view, always sort based on value of first column selector
        <th key={`header-row-${0}`} onClick={() => onClickHandler(0)}>
          Details
          {headerData[0].isSortable && (
            <div className="imageContainer">
              <img
                src={getIconToShow(headerData[0].sortDirection)}
                alt=""
                height="15"
                width="15"
              />
            </div>
          )}
        </th>
      ) : (
        headerData.map((headerRow, index) => (
          <th key={`header-row-${index}`} onClick={() => onClickHandler(index)}>
            {headerRow.displayTitle}
            {headerRow.isSortable && (
              <div className="imageContainer">
                <img
                  src={getIconToShow(headerRow.sortDirection)}
                  alt=""
                  height="15"
                  width="15"
                />
              </div>
            )}
          </th>
        ))
      )}
    </tr>
  );
};

export default TableHeader;
