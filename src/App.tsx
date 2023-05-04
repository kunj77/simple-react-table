import { useState } from "react";
import ReactTable from "./components/ReactTable";

const tableData = [
  {
    name: "Kunjan",
    age: "32",
    gender: "Female",
    country: "India"
  },
  {
    name: "Abhishek",
    age: "28",
    gender: "Male",
    country: "Singapore"
  }
];

const columnData = [
  {
    displayTitle: "Name",
    selector: "name",
    isSortable: true
  },
  {
    displayTitle: "Age",
    selector: "age",
    isSortable: true
  },
  {
    displayTitle: "Gender",
    selector: "gender",
    isSortable: true
  },
  {
    displayTitle: "Country",
    selector: "country",
    isSortable: true,
    minWidth: "10px",
    maxWidth: "20px",
    allowOverflow: true
  }
];

export default function App() {
  const [showLightThemeTable, setShowLightThemeTable] = useState(true);
  const showLightThemeText = "Switch to light theme single select table";
  const showDarkThemeText = "Switch to dark theme multiselect table";
  return (
    <div className="App">
      <button
        style={{
          padding: "20px",
          backgroundColor: "white",
          marginBottom: "20px",
          borderRadius: "30px",
          borderColor: "teal",
          borderWidth: "5px",
          cursor: "pointer"
        }}
        onClick={() =>
          showLightThemeTable
            ? setShowLightThemeTable(false)
            : setShowLightThemeTable(true)
        }
      >
        {showLightThemeTable ? showDarkThemeText : showLightThemeText}
      </button>

      {showLightThemeTable ? (
        <ReactTable
          columnData={columnData}
          tableData={tableData}
          isSingleSelectEnabled={true}
        />
      ) : (
        <ReactTable
          columnData={columnData}
          tableData={tableData}
          isMultiSelectEnabled={true}
          theme={"dark"}
        />
      )}
    </div>
  );
}
