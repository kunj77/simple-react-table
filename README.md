# simple-react-table

This is a simple react table that offers basic theming and customization options for text content. It has a declarative configuration and allows you to select single or multiple rows as well as sort based on column data. It also provides light and dark theme. 
The table is responsive and merges all columns into a single one based on screen size. In this case, the table will follow sorting and column styling of the first column.

# Basic Examples
You can easily create a simple table

```
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

<ReactTable
  columnData={columnData}
  tableData={tableData}
  isSingleSelectEnabled={true}
/>
```

# Customization


### For `ReactTable` the following props can be set
|Property|Type|Required|Usage|     
|--------|----|--------|-----|      
|hideHeader|boolean|No|By default the header will be shown, you can control the behavior via hideHeader|
|columnData|object[]|Yes|This is an array of columnData which contains information for each column. See next table for column customization section for full details|
|tableData|object[]|Yes|This is an array of any type of objects. It can contain any text data that you want to display|
|isSingleSelectEnabled|boolean|No|Enabling it will provide user with a radio button for each row, allowing single selection|
|isMultiSelectEnabled|boolean|No|Enabling it will provide user with a checkbox for each row, allowing muiltiple selection. It overrides isSingleSelectEnabled flag|
|theme|string|No|It allows caller to modify the theme of the table. Currently it only supports `light` and `dark` with `light` being the default|


### For `columnData` the following props can be set
|Property|Type|Required|Usage|     
|--------|----|--------|-----|  
|displayTitle|string|Yes|Name of the column|
|selector|string|Yes|Property of tableData object that needs to be shown in the column|
|isSortable|boolean|No|Enabled caller to allow sorting of the column data. Default is false|
|minWidth|string|No|Allows caller to specify the minimum width of column|
|maxWidth|string|No|Allows caller to specify the maximum width of column|
|allowOverflow|boolean|No|Allows caller to specify if overflow text can overflow and does not need to be clipped/wrapped. Default is true|


