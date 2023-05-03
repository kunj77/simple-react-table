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
  return (
    <div className="App">
      <ReactTable
        showHeaderRow={true}
        columnData={columnData}
        tableData={tableData}
        isSingleSelectEnabled={true}
        isMultiSelectEnabled={true}
        // theme={"dark"}
      />
    </div>
  );
}
