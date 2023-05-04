import { Header } from "../typings";

export default function getColumnStyleForCell(columnDetails: Header) {
    let cellStyle: any = {};
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